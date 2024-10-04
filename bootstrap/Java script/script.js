// let listaDevs = [
//     {
//         nome: "David",
//         idade: 29,
//         profissao: "DevFront",
//         tecnologias: ["React", "Next", "TailWind"]
//     },
//     {
//         nome: "Eduardo",
//         idade: 22,
//         profissao: "Dev Java",
//         tecnologias: ["Spring", "Hibernate"]
//     },
//     {
//         nome: "Bryan",
//         idade: 25,
//         profissao: "Dev Mobile",
//         tecnologias: ["React-Native", "Styled-component", "TailWind"]
//     }
// ]

// alem co call back e função anonima, precisamos passar um parametro a 
// listaDevs.map(function(cadaDev){

//     console.log(cadaDev);
// })
// console.log(listaDevs);

// for(let i = 0; i < listaDevs.length; i++){

//     console.log(`Os desenvolvedores são ${listaDevs[i].nome}`)
// }


// let imoveisCadastrados = [];
// let opcao = "";


// do {

//     opcao = prompt(`
//         Bem vindos ao cadastro de imoveis
//         Total de imoveis: ${imoveisCadastrados.length}

//         1 - Novo Imovel.
//         2 - Listar Imoveis.
//         3 - Sair.

//     `)

//     switch (opcao) {
//         case "1":

//             let imovel = {};

//             imovel.nome = prompt(`Qual o nome do proprietario?`)
//             imovel.quartos = parseInt(prompt(`Quantos quartos possui o imovel?`))
//             imovel.banheiro = parseInt(prompt(`Quanto banheiros possui o imovel?`))
//             imovel.garagem = prompt(`Possui garagem? Sim / Não`)

//             let salvarImovel = confirm(
//                 `Deseja salvar este imovel? \n
//                Proprietario: ${imovel.nome} \n
//                Quartos: ${imovel.quartos} \n
//                Banheiros: ${imovel.banheiro} \n
//                Garagem ${imovel.garagem} \n
//                 `
//             )

//             if (salvarImovel) {
//                 imoveisCadastrados.push(imovel)
//             }

//             break;
//         case "2":
//             if (imoveisCadastrados.length === 0) {
//                 alert(`Não existe imoveis cadastrados`)
//             } else {
//                 for(let i = 0; i < imoveisCadastrados.length; i++){
//                     alert(
//                         `
//                         Imoveis:

//                        Proprietario: ${imoveisCadastrados[i].nome} \n
//                        Quartos: ${imoveisCadastrados[i].quartos} \n
//                        Banheiros: ${imoveisCadastrados[i].banheiro} \n
//                        Garagem: ${imoveisCadastrados[i].garagem} \n

//                         `
//                     )
//                 }
//             }
//             break;
//         case "3":

//             break;
//         default:
//             alert(`Opção inválida`);
//             break;
//     }

// } while (opcao != "3");


// function saudacao(){
//    console.log(`olá mundo`)
// }
// saudacao();

// const saudacao = () =>== {
//     console.log(`olá mundo alguma coisa`)
// }
// saudacao();

// function saudarUsuario(nome){
//     console.log(`Olá senhor ${nome}`)
// }
// saudarUsuario("David");

// criar uma função que retorne o dobro de um numero


// var num1 = parseInt(prompt(`Digite um numero:`))
// var num2 = parseInt(prompt(`Digite outro numero:`))

// function somarNumeros(a, b){
//     console.log(`A soma dos numeros informados são : ${a + b}`)
// }

// function dobro(numero){
// console.log(`O dobro do número ${numero} é igual a ${numero * 2}`)
// }
// dobro(30);

// function mediaDoAluno(num1, num2){
//     let media = (num1 + num2) / 2
//     return media
// }

// let mediaFinal = mediaDoAluno(10, 10);

// console.log(mediaDoAluno(9, 9));
// console.log(mediaFinal)

