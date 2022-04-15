const formulario = document.querySelector('.form-pre-result');

const buttonsValue = document.querySelectorAll('.btn-value');

function handleClick(event) {
    event.preventDefault();
    buttonsValue.forEach((item) => {
        item.classList.remove('clicado');
    });
    event.currentTarget.classList.add('clicado');
}

buttonsValue.forEach((item) => {
    item.addEventListener('click', handleClick)
})

formulario.addEventListener('submit', function(e) {
    const firstInput = document.querySelector('.conta');
    const primeiroValor = firstInput.value;
    const threeInput = document.querySelector('#num-people');
    const segundoValor = threeInput.value;
    const twoInput = document.querySelector('.clicado')
    const terceiroValor = twoInput.value;
    const porcentagem = (terceiroValor / 100) * primeiroValor;
    const resultadoPessoa = porcentagem / segundoValor;
    const totalPessoa = resultadoPessoa + (primeiroValor / segundoValor);
    const gorjetaPessoa = document.querySelector('.tip-amount');
    const result1 = resultadoPessoa.toFixed(2);
    gorjetaPessoa.innerHTML = "$" + result1;
    const total = document.querySelector('.total');
    const result2 = totalPessoa.toFixed(2);
    total.innerHTML = "$" + result2;

    console.log("O numero teste deu " + resultadoPessoa)
    e.preventDefault();
})

const btnReset = document.querySelector('.button-reset button');

btnReset.addEventListener('click', function() {
    location.reload();
})