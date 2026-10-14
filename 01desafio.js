//01. Criar uma função que exibe "Olá, mundo!" no console.
function imprimiOlaMundo () {
    console.log('Olá, mundo!');
}

//02. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacao(nome) {
    console.log(`Olá, ${nome}.`);
}
saudacao('Gabriela');

//03. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}

//04. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

//05. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function calcularMaior(maior1, maior2) {
    if (maior1 > maior2) {
        return maior1;
    } else {
        return maior2;
    }
}

//06. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicarNumero(numero0) {
    return numero0 * numero0;
}