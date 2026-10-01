function calcularEscore(palavra) {
  let soma = 0;

  Array.from(palavra.toLowerCase()).forEach((letra) => {
    soma += letra.charCodeAt(0) - 96;
  });
  return soma;
}

document.querySelector("#converter").addEventListener("click", () => {
  const valor = document.querySelector("#entradaValor").value;
  const pontos = calcularEscore(valor);

  document.querySelector("#resultadoValor").textContent = "pontos: " + pontos;
});
