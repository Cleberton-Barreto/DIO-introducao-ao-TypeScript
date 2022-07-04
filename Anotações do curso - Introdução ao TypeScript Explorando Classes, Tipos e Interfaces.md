# Introdução ao TypeScript Explorando Classes, Tipos e Interfaces :bookmark:

***Link para Download do TypeScript :*** (https://www.typescriptlang.org/download)

***comandos no terminal do VSCode***

**npm init**

**npm install --save-dev typescript**

**npm install lite-server**

dentro do arquivo ***{ }package.json*** abaixo da linha *"test": "echo \"Error: no test specified\" && exit 1"* insira a linha *"start": "lite-server"* e abaixo desta *"watch": "tsc --watch"*

**tsc --init** (comando para criar a pasta ***tsconfig.json*** onde podemos fazer algumas configurações)

**tsc** (comando para compilar para ***.js***)

**npm run watch**  (comando para compilar de forma automática sempre que salvamos nosso escript, serve para não ficarmos a todo momento indo no terminal e dando o comando tsc)

**npm start** (comando para rodar nosso servidor e realizarmos os testes durante o desenvolvimento)

### Objetivos do curso

1. Apresentar e explicar as vantagens de desenvolver com TypeScript;
2. Explicar na prática como configurar e usar a ferramenta;
3. Solidificar os conhecimentos com uma bateria de exercícios de TS;



### O que é JavaScript

* Superset do JavaScript

  *-Liguagem construída por cima do JS*;

  *-Adiciona features à linguagem original*;

  *-Compila para JS*;



### Por que usar TypeScript

* Adiciona definição estática de tipos;

  *-Funcionalidades do código mais explícitas;*

  *-Maior segurança durante o desenvolvimento*;

  *-Detecta erros durante a compilação que só seriam percebidos em execução*;

* Compila um JavaScript mais resiliente;

* Ajuda a desenvolver boas práticas de programação;




### Features do TypeScript

**Setup do ambiente**

* Projeto Node:

  *-Instalar o Node (https:llnodejs.org/en/download/)*;

  *-Abrir a pasta do projeto com o terminal*;

  -*Inserir o comando ***npm init*** ;* 

  *-Confirmar todas as configurações.*;

* TypeScript:

  *-Inserir o comando ***npm install -g typescript*** (se possível)*;

  *-Inserir o comando ***npm install typescript*** ;*

* Temos um repositório:

  *-Contem um reafme com dicas de TS;*

  *-Commits feitos com cuidado para explicar o uso da ferramenta;*

  *-Documentação com exemplos de uso;*

  *-Exercícios! Podem mexer à vontade;*

  *-Link:(https://github.com/lira1705/mentoria-typescript);*

  ​


**Type** 

​	podemos usar a função type para tipar nossas variáveis, facilitando assim seu uso e um melhor entendimento do código, conforme imagem abaixo;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_JavaScript/img/type.png)



**Tipando parâmetros**

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_JavaScript/img/type1.png)



**Definindo o tipo de retorno de uma função**

​	Desta forma, apenas setando esse detalhe nós conseguimos garantir que nossos valores serão de fato um número;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_JavaScript/img/type2.png)

​	Segue abaixo, um exemplo de erro que o type escript não pegaria pois não há erro em sua syntaxe e sim na sua lógica, mas se tivessemos tipado como no exemplo acima, o typescript teria dado o alerta de erro; 

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_JavaScript/img/type3.png)

​	Quando quisermos rodar uma função, mas não queremos que ela nos retorne nenhum valor ou resultado, podemos definir seu tipo como ***void***, conforme imagem abaixo;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_JavaScript/img/type4.png)



**Usando CallBack dentro da função**

​	Usando callback nós podemos definir um valor e usar esse valor para diversos fins, conforme imagem abaixo;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_JavaScript/img/type5.png)



**resumo dos tipos;**

​	***Boolean - String - Enum - Any - Void - Função - Unknown - Never e etc...***

​	***Link*** para muitos outros tipos em TypeScript(https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)



### TSConfig.json

* ***"target":*** onde definimos a versão para qual iremos compilar, se é mais antiga se é mais recente.
* ***"lib: [ ]"*** para definir uma biblioteca específica a ser utilizada, caso queira tudo, basta deixar comentada mesmo como default.
* ***"outDir":*** serve para criar uma pasta onde podemos mandar todos os nossos projetos já compilados para lá, melhorando a visualização dos mesmos.



**resumo das configuraçãoes;**

​	***Target - lib - sourceMap - outDir/rootDir - strict - nolmplicitAny - noUnusedLocals - noUnusedParameters  e etc...***

​	***Link*** para saber mais, consulte (https://typescriptlang.org/tsconfig)



