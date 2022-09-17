var n1 = 9;
var n2 = 8;
/*
== Igualdade
< Menor
> Maior
!= diferente
<= Menos ou igual
>= Maior ou igual
*/
document.write(`<h2> Operador de comparação Igual a</h2>`);
if(n1 == n2){
    document.write(`O valor ${n1} é igual o valor ${n2}`);
}
else{
    document.write(`O valor ${n1} não é igual de ${n2}`);
}

document.write("<h2> Operador de comparação diferente de</h2>");

if(n1 != n2){
    document.write(`O Valor ${n1} é difente de ${n2}`);
}
else{
    document.write(`O valor ${n1} não é diferente a ${n2}`);
}

document.write("<h2>Operador de comparação menor que</h2>");
if(n1 < n2){
    document.write(`O valor ${n1} é menor do que o valor ${n2}`);
}
else{
    
    document.write(`O valor ${n1} não é menor do que o valor ${n2}`);
}

document.write("<h2>Operador de comparação maior que</h2>");
if(n1 > n2){
    document.write(`O valor ${n1} é maior do que o valor ${n2}`);
}
else{
    document.write(`O valor ${n1} não é maior do que o valor ${n2}`);
}

document.write("<h2>Operador de comparação menor ou igual a</h2>");
if(n1 <= n2){
    document.write(`O valor ${n1} é menor ou igual ao valor ${n2}`);
}
else{
    
    document.write(`O valor ${n1} não é menor ou igual ao valor ${n2}`);
}

document.write("<h2>Operador de comparação maior ou igual que</h2>");
if(n1 >= n2){
    document.write(`O valor ${n1} é maior ou igual ao valor ${n2}`);
}
else{
    document.write(`O valor ${n1} não é maior ou igual ao valor ${n2}`);
}
