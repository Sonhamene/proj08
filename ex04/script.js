let nome = prompt("Qual seu nome?")
let sobrenome = prompt("Qual seu sobrenome?")

while (sobrenome == "" || nome == "") {
    alert("nome invalido, preenche direito")
    nome = prompt("qual seu nome?")
    sobrenome = prompt("qual seu sobrenome?")
}