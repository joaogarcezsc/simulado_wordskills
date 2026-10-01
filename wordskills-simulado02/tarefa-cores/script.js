const TAMANHO = 16;

const cores = [
  "#000000",
  "#1a9a9a",
  "#1a1adc",
  "#4b3a91",
  "#8b0000",
  "#888888",
  "#8fc7ee",
  "#a7a72d",
  "#b5832a",
  "#d61a8c",
  "#f5a9b8",
  "#ee1111",
  "#ffd800",
  "#ffedc0",
  "#cccccc",
  "#ffffff",
];

let corAtual = cores[0];

const grade = document.getElementById("grade");
const paleta = document.getElementById("paleta");

for (let i = 0; i < TAMANHO * TAMANHO; i++) {
  const quadro = document.createElement("div");
  quadro.classList.add("quadro");

  quadro.addEventListener("click", () => {
    quadro.style.background = corAtual;
  });

  grade.appendChild(quadro);
}

cores.forEach((cor, indice) => {
  const botao = document.createElement("button");
  botao.classList.add("cor");
  botao.style.backgroundColor = cor;
  botao.title = cor;

  if (indice === 0) {
    botao.classList.add("selecionada");
  }

  botao.addEventListener("click", () => {
    corAtual = cor;

    document.querySelector(".cor.selecionada").classList.remove("selecionada");
    botao.classList.add("selecionada");
  });

  paleta.appendChild(botao);
});
