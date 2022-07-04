const pessoa = {
    nome: 'Mariana',
    idade: 21,
    profissão: 'desenvolvedora',
}

pessoa.idade = 33

const andre:  {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 23,
    profissao: 'Desenvolvedora'
}

enum Profissão{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissão
}

interface Estudante extends Pessoa{
    matéria: string[],

}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissão.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 27,
    profissao: Profissão.Desenvolvedora
}

const jessica: Estudante = {
    nome:'Jessica',
    idade: 28,
    profissao: Profissão.Desenvolvedora,
    matéria: ['Matemática', 'Português', 'Ciências']
}

const monica: Estudante = {
    nome:'Mônica',
    idade: 28,
    matéria: ['Matemática discreta', 'programação']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', lista)
    }
}
listar(jessica.matéria)