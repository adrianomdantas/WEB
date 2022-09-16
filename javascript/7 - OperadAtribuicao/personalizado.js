var n1 = 8;
var n2 = 3;

var totsoma = n1;
totsoma +=n2;
document.write(`A soma entre ${n1} e ${n2} é ${totsoma}<br>`);

var totsubtracao = n1;
totsubtracao -= n2;
document.write(`A subtração entre ${n1} e ${n2} é ${totsubtracao}<br>`);

var totmultiplicacao = n1;
totmultiplicacao *= n2;
document.write(`A multiplicação entre ${n1} e ${n2} é ${totmultiplicacao}<br>`);

var totdivisao = n1;
totdivisao /= n2;
document.write(`A divisão entre ${n1} e ${n2} é ${totdivisao}<br>`);

//var totmodulo = n1;
//var totmodulo %= n2;
//document.write(`O módulo do resto da divisão entre ${n1} e ${n2} é ${totmodulo}<br>`);

n1 %= n2;
document.write(`O módulo do resto da divisão entre ${8} e ${3} é ${n1}<br>`);