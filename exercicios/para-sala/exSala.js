//Exercicio para a Sala - Refatore o código abaixo:
var menu = [{
    id: 1,
    nome: "Refrigerante",
    preco: 3.50,
    sabor: "Morango",
    marca: "RefriKeylinha",
    bio: `Nome: ${menu[0].nome}
    Preço: ${menu[0].preco}
    Sabor: ${menu[0].sabor}
    Marca: ${menu[0].marca}`
},
{
    id: 2,
    nome: "Suco",
    preco: 2.50,
    sabor: "Uva",
    marca: "SuquinhoKeylinha",
    bio: `Nome: ${menu[1].nome}
    Preço: ${menu[1].preco}
    Sabor: ${menu[1].sabor}
    Marca: ${menu[1].marca}`
},
{
    id: 3,
    nome: "Chá",
    preco: 3.00,
    sabor: "Mate",
    marca: "MateKeylinha",
    bio: `Nome: ${menu[2].nome}
    Preço: ${menu[2].preco}
    Sabor: ${menu[2].sabor}
    Marca: ${menu[2].marca}`
}];

function ofertaMenu() {
    var escolha = Number(prompt(`Informe o numero que deseja informações:
    1- Refrigerante
    2- Suco
    3- Chá`));

    switch (escolha) {
        case 1: alert(menu[0].bio);
            break;
        case 2: alert(menu[1].bio);
            break;
        case 3: alert(menu[2].bio);
            break;

    }
}
ofertaMenu();
var retornaMenu = confirm("Deseja retornar ao menu?");
    while(retornaMenu == true){
        ofertaMenu();
}
