//O getElementById é utilizado para acessar um seletor id
document.getElementById("exemplo-um").innerHTML = "inserir texto no exemplo um";

 //O getElementByName é utilizado para acessar um seletor id é utilizado para acessar varios elementos , utilizado lara formulários, pode receber mais de um elemento
function exemploDois(){
    var nomeElemento = document.getElementsByName("Curso");
    console.log(nomeElemento);
// Tamanho do nodelist
    console.log(`Tamanho do nodelist ${nomeElemento.length}`);
    // Ler um elemento do nodelist individual
    console.log(`Elemento da posição 2: ${nomeElemento[2]['value']}`);
    for(var i = 0; i < nomeElemento.length; ++i){
        console.log(nomeElemento[i]['value']);
    }
}
 //O getElementBytagname é utilizado para acessar uma tag
function exemploTres(){
    var nomeTag = document.getElementsByTagName("span");
    console.log(nomeTag);
    console.log(`O Tamanho do nomeTag é ${nomeTag.length}`);
    console.log(`Posição 0 ${nomeTag[0]['innerHTML']}`)
    for(var i = 0; i < nomeTag.length; ++i){
        console.log(nomeTag[i]['innerText'])
    }
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