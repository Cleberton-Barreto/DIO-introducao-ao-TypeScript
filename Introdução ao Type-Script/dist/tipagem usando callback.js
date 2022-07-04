"use strict";
function somando(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somando(1, 3, aoQuadrado)); // 1 + 3 = 4 x 4 = 16 (vai mostrar na tela: 16) 
console.log(somando(1, 3, dividirPorEleMesmo)); // 1 + 3 = 4 / 4 = 1 (vai mostrar na tela: 1)
