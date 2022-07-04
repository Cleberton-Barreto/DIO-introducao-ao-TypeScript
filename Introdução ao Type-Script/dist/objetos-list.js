"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 21,
    profissão: 'desenvolvedora',
};
pessoa.idade = 33;
const andre = {
    nome: 'André',
    idade: 23,
    profissao: 'Desenvolvedora'
};
var Profissão;
(function (Profissão) {
    Profissão[Profissão["Professora"] = 0] = "Professora";
    Profissão[Profissão["Atriz"] = 1] = "Atriz";
    Profissão[Profissão["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissão[Profissão["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissão || (Profissão = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissão.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 27,
    profissao: Profissão.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissão.Desenvolvedora,
    matéria: ['Matemática', 'Português', 'Ciências']
};
const monica = {
    nome: 'Mônica',
    idade: 28,
    matéria: ['Matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', lista);
    }
}
listar(jessica.matéria);
