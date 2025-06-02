function cadastrar(){
    let nome = document.getElementById("nome").value
    let nascimento = document.getElementById("nascimento").value
    let telefone = document.getElementById("telefone").value
    let turma = document.getElementById("turma").value


    let tabela = document.getElementById('tabela');
    let novaLinha = tabela.insertRow(-1); 
    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = nascimento;
    novaLinha.insertCell(2).innerText = telefone;
    novaLinha.insertCell(3).innerText = turma;


    result.innerHTML = tabela;
}