// comece a criar a sua função add na linha abaixo


function add(a, b) {  
    return a + b; 
}

console.log(add(3, 5), 'add');


// comece a criar a sua função multiply na linha abaixo

function multiply(a, b) { 
    let soma = 0;
    for(let i = 0; i < b; i++) {   
       soma = add(soma, a);              
    } 
        return soma;
}

console.log(multiply(4, 6), 'multiply');


// comece a criar a sua função power na linha abaixo

function power(x, n) { 
    let multiplica = 1;
    for(let i = 0; i < n; i++) {
        multiplica = multiply(multiplica, x)
    }
    return multiplica;
}

console.log(power(3, 4), 'Power');


// comece a criar a sua função factorial na linha abaixo

function factorial(z) {
    let fator = z ;
    for(let i = 1; i < z; i++) {
        fator = multiply(fator, i)
    }
        return fator;
}
console.log(factorial(5), 'factorial');


