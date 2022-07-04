type input = number | string

function somaValores(input1: input, input2: input){
    if (typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString()
    }else{
        return input1 + input2
    }
}
console.log(somaValores(10, 20)) // vai nos retornar 30
console.log(somaValores('Olá', ', Mundo!' ))// vai nos retornar 'Olá Mundo!'
console.log(somaValores(10, '5' ))// vai nos retornar 105
console.log(somaValores('10', '5' ))// vai nos retornar 105