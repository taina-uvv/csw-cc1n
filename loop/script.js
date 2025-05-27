function calcularIdade(){
        var hoje = new Date()

        let result = document.getElementById("resultado")

        dia = document.getElementById("dia").value
        mes = document.getElementById("mes").value
        ano = document.getElementById("ano").value

        if (dia <= 0 || dia > 31 || ano <= 0) {
            alert("Digite uma data de nascimento valida")
            return
        }

        nascimento = new Date(ano + "/" + mes + "/" + dia);

        var idade = hoje.getFullYear() - nascimento.getFullYear()

        let dth = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
        let dth2 = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())

        if (dth < dth2) {
            idade--;
        }

        result.style.color = random_rgba();
        result.innerHTML = "<b>" + `  Você tem ${idade} ` + "</b>"

    }

function calcularOperador(){
    let numero1 = Number(document.getElementById("number1").value)
    let numero2 = Number(document.getElementById("number2").value)
    let operador = (document.getElementById("operador").value)
    let resultadocalc = 0
    switch (operador) {
        case '+':
            resultadocalc = numero1 + numero2;
            break;
        case '-':
            resultadocalc = numero1 - numero2;
            break;
        case 'x':
            resultadocalc = numero1 * numero2;
            break;
        case '/':
            resultadocalc = numero1 / numero2;
            break;
        default:
            alert('operador não identificado!');
        }

        let result = document.getElementById("resultadocalc")

        result.style.color = random_rgba();
        result.innerHTML = resultadocalc
}
function random_rgba() {
        var o = Math.round,
            r = Math.random,
            s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    };

