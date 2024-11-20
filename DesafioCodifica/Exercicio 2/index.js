//EXERCÍCIO 2 - Crie um vetor contendo 10 números e faça a média de todos os valores. 

//Criação do vetor
let numeros = [2, 7, 9, 23, 34, 45, 55, 67, 78, 90]
console.log(numeros)

//Somando os numeros do vetor
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i] // "soma +=" faz a soma em sequencia dos elementos no vetor
}
console.log('Esta é a quantidade de elementos: ' + numeros.length)

//Calculando a média
let media = soma / numeros.length
console.log("A média é: " + media)



