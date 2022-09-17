var cadeira = {
    cor: "preta",
    altura: 118,
    largura: 74,
    profundidade: 64,
    
};

document.write(`Cor da cadeira ${cadeira.cor}<br>`);
document.write(`Altura da cadeira ${cadeira.altura}<br>`);
//Mudando um atributo
cadeira.cor = "branca;"
document.write(`Cor da cadeira ${cadeira.cor}<br>`);

//Adicionando um atributo
cadeira.peso =17;
document.write(`peso da cadeira ${cadeira.peso}<br>`);

//apagar um atributo
document.write(`Cor da cadeira ${cadeira.profundidade}<br>`);

delete cadeira.profundidade;

document.write(`Cor da cadeira ${cadeira.profundidade}<br><hr>`);

//criar objeto não literal
var mesa = new Object();
mesa.cor = "Preta";

document.write(`Cor da mesa ${mesa.cor}<br>`);