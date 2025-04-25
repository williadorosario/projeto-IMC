let peso;
let altura;
let imc;
let resultado = document.getElementById("resultado");

function calcular(event) {
    event.preventDefault();

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura);

    if (peso === "" || altura === "") {
        resultado.innerHTML = "PREENCHA OS CAMPOS";
    } else if (imc < 17) {
        resultado.innerHTML = `Você está MUITO abaixo do peso <br> com: ${imc.toFixed(
            2
        )}`;
    } else if (imc >= 17 || imc <= 18.49) {
        resultado.innerHTML = `Você está ABAIXO do peso <br> com: ${imc.toFixed(
            2
        )}`;
    } else if (imc >= 18.5 || imc < 24.99) {
        resultado.innerHTML = `PARABÉS você está no peso ideal <br> com: ${imc.toFixed(
            2
        )}`;
    } else if (imc >= 25 || imc < 29.99) {
        resultado.innerHTML = `CUIDADO você está acima do peso <br> com: ${imc.toFixed(
            2
        )}`;
    } else {
        imc > 30;
        resultado.innerHTML = `ALERTA você com obesidade <br> com :${imc.toFixed(
            2
        )}`;
    }

    peso = document.getElementById("peso").value = "";
    altura = document.getElementById("altura").value = "";
}
