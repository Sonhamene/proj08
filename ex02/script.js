let soma = 0
let contador = 0
let notas = Number(prompt("Digite suas notas (somente positivos"))


while (notas >= 0) {
    contador ++
    soma += notas
    notas = Number(prompt("Digite suas notas (somente positivos)"))

}
if (contador > 0) {
    let media = soma / contador
    alert (`sua média é ${media} `)
} else {
    alert("Nenhuma nota válida foi digitada")
}