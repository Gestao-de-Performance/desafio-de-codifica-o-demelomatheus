//EXERCÍCIO 1 - Crie um programa que possua duas variáveis com os valores 199,3 e 120 e realize a soma de ambas.//

//Soma com 'console.log'(apenas dá o valor//)
function somavalor(x , y){
    let result = x + y
    console.log(result)
}

somavalor(199.3,120)


//Soma com 'return'(utilizado para tratamento ou seja utiliza o valor para algo a mais)//
function soma(a , b){
    let resultado = a + b
    return resultado
}

let soma1 = soma(34, 7)
let soma2 = soma(56, 23)
let resultado = soma(soma1, soma2)
console.log(resultado)


//Soma utilizando numeros decimais - converter - Tirar duvidas com mago ////

//strings que deverão ser transformadas em numeros para acontecer a soma dos decimais. Se não houver a conversão, os numeros serão apenas "juntados" Ex.:25,1354,34
let num1 = "199,3" 
let num2 = "120"


//necessario trocar a virgula por ponto para haver a somatória
n1 = parseFloat(num1.replace(",", ".")) //convertendo de string para numero utilizando Float
n2 = parseFloat(num2.replace(",", "."))

let resposta = n1 + n2 //resultado após tranformados em numeros
console.log(resposta)
console.log(typeof resposta)

//Conversão do ponto para vírgula, para voltar a ser string e o resultado possuir a ","//
let respostaString = String(resposta)
console.log(respostaString.replace(".",","))
console.log(typeof respostaString)

/////////////////////////////////////////////////////////////////

//EXERCÍCIO 2 - Crie um vetor contendo 10 números e faça a média de todos os valores. (tirar duvida sobre a questao de utilizar a mesma palavra, no caso "soma", atrapalhou para realização)

//Criação do vetor
let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Somando os numeros do vetor
let adição = 0;
for (let i = 0; i < numeros.length; i++) {
    adição += numeros[i];
}

// Passo 3: Calcular a média
let media = adição / numeros.length;

console.log("A média dos números é: " + media);



