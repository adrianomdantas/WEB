var nota = 8;
var falta = 27;
/*
&& -> E - Retorna True se ambos os operadores forem verdadeiros
|| -> ou - retorna True se um ou outro forem verdadeiros
!  -> não - retorna True se o operador não é verdadeiro
*/
document.write(`<h2> Situação aluno </h2>`);
if((nota <= 5) || (falta > 25)){
    document.write(`Reprovado, Nota: ${nota} Falta ${falta} <br>`);
}
else{
    document.write(`Aprovado, Nota ${nota} Falta ${falta}<br>`);
}

if((nota <= 5) && (falta > 25)){
    document.write(`Reprovado: Nota ${nota}. Falta: ${falta}<br>`)
}
else{
    document.write(`Aprovado: Nota ${nota}. Falta: ${falta}<br>`)
}

var situacao = !false;
document.write(`Siruação: ${situacao} <br>`)