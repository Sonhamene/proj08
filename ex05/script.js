let saldo = 7000

while (saldo > 0){

    let sacar = Number(prompt("Qual valor você quer sacar?"))
    while (sacar > saldo ) {
        alert("Saldo indisponível")
        sacar = Number(prompt("Qual valor você deseja sacar?"))
    }
    saldo -= sacar
    alert(`Você sacou ${sacar}. Saldo restante: ${saldo}`)
}
alert("Você esta sem saldo")
