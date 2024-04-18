//1 desafio

let INDICE = 13;
let SOMA = 0;
let K = 0;

for (K; K < INDICE; K++) {
    SOMA = SOMA + K
    console.log(SOMA)
    // ao final a variavel soma tera o valor de 78
}


//2 desafio 

function isFibonacciNumber(num) {
    let a = 0
    let b = 1
    let c
    
    while (true) {
        if (a === num || b === num) {
            return true
        }
        c = a + b
        if (c === num) {
            return true
        } else if (c > num) {
            return false
        }
        a = b
        b = c
    }
}

let numero = 13 
if (isFibonacciNumber(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.")
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.")
}


// desafio 3

// a  = 9 ou 11

// b = 128

// c = 49

// d = 100

// e = 13

// f = 200

//desafio 4 

// resposta = eu ligaria o primeiro interruptor e esperava alguns minutos, e depois ligava outro interruptor, depois disso
// eu iria na sala das lampadas, eu veria qual lampada esta ligada e já saberia qual interruptor liga essa lampada, eu tocaria
// nas outras duas lampadas para ver a temperatura, se estiver quente, o primeiro interruptor é dessa lampada e o 3 da lampada que sobrou, se estivesse fria, apenas inverteria.


// desafio 5 

function inverterString(str) {
    
    return str.split('').reverse().join('');
}


let minhaString = "Bola"
let stringInvertida = inverterString(minhaString)
console.log(stringInvertida)

// resposta = aloB

