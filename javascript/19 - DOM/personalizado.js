//O getElementById é utilizado para acessar um seletor id
document.getElementById("exemplo-um").innerHTML = "inserir texto no exemplo um";

 //O getElementByName é utilizado para acessar um seletor id é utilizado para acessar varios elementos , utilizado lara formulários, pode receber mais de um elemento
function exemploDois(){
    var nomeElemento = document.getElementsByName("Curso");
    console.log(nomeElemento);
}
 //O getElementBytagname é utilizado para acessar uma tag
function exemploTres(){
    var nomeTag = document.getElementsByTagName("span");
    console.log(nomeTag);
}
 
 function exemploQuatro(){
    var nomeTagLista = document.getElementsByTagName("li");
    console.log(nomeTagLista);
 }
 //O getElementByClassName para acessar atravém no nome da classe
 function exemploCinco(){
    var nomeClasse = document.getElementsByClassName("produto");
    console.log(nomeClasse);
 }