let compras = Number(prompt("Quanto deu a compra?"))
let soma = 0

while (compras > 0) {
    soma += compras
    compras = Number(prompt("Quanto deu a sua compra?"))
}

alert(`O valor da sua compra foi ${soma}`)
