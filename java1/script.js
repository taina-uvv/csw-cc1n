
function exibeDados() {
window.alert("Olá, mundo!");

document.getElementById("resposta").innerHTML = "Resposta de saída: Esse é meu novo segundo código javascript"

document.getElementById("resposta2").innerHTML = window.confirm("Você está gostando do curso?");

document.getElementById("caixa").innerHTML = "O nome digitado foi: " + window.prompt("Qual seu nome: ");

}

function abrirPagina() {
window.open("page001.html", "_blank")
}

function enviaDados(){
    window.alert("O nome digitado foi: " + document.getElementById ("nome").value);
    document.getElementById("nome").innerHTML = window.prompt
}