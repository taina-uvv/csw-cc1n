function identificar(){
    let idade = parseInt(document.getElementById("inputIdade").value);
    if(idade>1 && idade<11){
        document.getElementById("idade").innerHTML = "Criança.";
    }
    else 
    if(idade>10 && idade<16) {
        document.getElementById("idade").innerHTML = "Adolescente.";
    }
    else if(idade>15 && idade<30) {
        document.getElementById("idade").innerHTML = "Jovem.";
    }
    else if(idade>29 && idade<60) {
        document.getElementById("idade").innerHTML = "Adulto.";
    }
    else {
        document.getElementById("idade").innerHTML = "Idoso.";
    }
}