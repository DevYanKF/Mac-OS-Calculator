let elementoResultado = document.querySelector('.js-resultado');
let botoesPadroes = document.querySelectorAll('.js-btn-padroes');
let botaoResultado = document.querySelector('.js-btn-igual');
let botaoAC = document.querySelector('.js-btn-ac');
let botaoMaisMenos = document.querySelector('.js-btn-mais-menos');
let botaoDeletar = document.querySelector('.js-btn-del');

botoesPadroes.forEach((elementoCorrente) =>{
    elementoCorrente.addEventListener('click', () => {
        let valorDoElementoClicado = elementoCorrente.dataset.valor;
        adicionarElementoAoInputResultado(valorDoElementoClicado);
    });
});

botaoResultado.addEventListener("click", () => {
    executarCalculo();
})

botaoAC.addEventListener("click", () => {
    limparResultado();
})

botaoMaisMenos.addEventListener("click", () => {
    trocarSinalDaConta();
})

botaoDeletar.addEventListener("click", () => {
    deletarUltimoDigitoDoResultado();
})

function adicionarElementoAoInputResultado(numeroDigitado) {
    let ultimoValorNoInputResultado = elementoResultado.value[elementoResultado.value.length -1];

    if (
    ultimoValorNoInputResultado &&
    !Number(ultimoValorNoInputResultado) &&
    !Number(numeroDigitado) &&
    ultimoValorNoInputResultado != 0 &&
    numeroDigitado != 0
     ){
        deletarUltimoDigitoDoResultado(); 
    }
    if (elementoResultado.value.length == 0 && !Number(numeroDigitado)) {
        return;
    }
    elementoResultado.value += numeroDigitado;
}

function executarCalculo() {
    try {
        elementoResultado.value = eval(elementoResultado.value);
    } catch (error) {
        alert ('Algo deu errado. Tente novamente.')
    }
}

function limparResultado() {
    elementoResultado.value = "";
}

function trocarSinalDaConta() {
    if(Number(elementoResultado.value)){
    elementoResultado.value = elementoResultado.value * -1
    }
}

function deletarUltimoDigitoDoResultado() {
    elementoResultado.value = elementoResultado.value.slice(0, -1);
}