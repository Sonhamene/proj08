let numero = Number(prompt("Escolha um número positivo"))

while (numero < 0) {
    alert("Esse número é inválido, tente novamente")
    numero = Number(prompt("Escolha um número positivo"))

}

alert(`Seu número é válido! ${numero}`)