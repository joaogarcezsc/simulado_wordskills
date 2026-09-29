function calcularEscore(palavra) {
  const limpa = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  let soma = 0;

  for (const letra of limpa) {
    if (letra >= "a" && letra <= "z") {
      soma += letra.charCodeAt(0) - 96;
    }
  }

  return soma;
}

document.querySelector("#converter").addEventListener("click", () => {
  const saida = document.querySelector("#resultadoValor");
  const valor = document.querySelector("#entradaValor").value.trim();

  if (valor === "" || !isNaN(valor)) {
    saida.textContent = "Digite uma palavra.";

    return;
  }

  saida.textContent = "Pontos: " + calcularEscore(valor);
});
