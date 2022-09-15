function nome_funcao(){
    alert("Login ou senha incorreto");
}

function somar(a, b){
    alert(`A soma ente ${a} e ${b} é ${a + b}`);
}

//Duas formas de chamar a função direto do javascript
function desconto(a, b){
    var totdesc = a - b;
    return totdesc
    //document.write(`Valor total do desconto: ${totdesc}`);
}
//desconto(97, 15);
var resultTotalDesc = desconto(50, 20);
document.write(`Valor total do desconto: ${resultTotalDesc}`)