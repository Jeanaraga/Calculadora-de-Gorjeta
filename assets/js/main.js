const gorButtons = document.querySelectorAll('.btn-value')

function handleClick(event) {
    event.preventDefault();
    gorButtons.forEach((item) => {
        item.classList.remove('clicado')
    })
    event.currentTarget.classList.add('clicado')
}

gorButtons.forEach((item) => {
    item.addEventListener('click', handleClick)
})

let conta = document.querySelector('form');

conta.addEventListener('submit', function (e) {
    let aConta = document.querySelector('.conta');
    let gorjeta = document.querySelector('.clicado');
    let valorGor = gorjeta.innerHTML - "%";
    let numPessoas = document.getElementById('num-people')
    let resultado = document.querySelector('.tip-amount');
    resultado.innerHTML = '$' + aConta.value / numPessoas.value - gorjeta;
    e.preventDefault();
})

let gorjeta = document.querySelector('.clicado');
    let valorGor = gorjeta.innerHTML - "%";

    console.log(valorGor)