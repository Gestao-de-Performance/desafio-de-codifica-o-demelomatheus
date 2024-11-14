// Array dos números fornecidos
const numeros = [2, 7, 9, 23, 34, 45, 55, 67, 78, 90];
console.log(numeros);

// Função para verificar se um número é primo
function ehPrimo(num) {
    // Números menores ou iguais a 1 não são primos
    if (num <= 1) return false;

    // 2 é o único número primo par
    if (num === 2) return true;

    // Eliminar todos os outros números pares
    if (num % 2 === 0) return false;

    // Verificar fatores de 3 até num/2
    for (let i = 3; i <= num / 2; i += 2) {
        if (num % i === 0) return false;
    }

    // Se nenhum fator for encontrado, num é primo
    return true;
}

// Filtrar números primos do array
const numerosPrimos = numeros.filter(ehPrimo);
console.log("Números primos:", numerosPrimos);
