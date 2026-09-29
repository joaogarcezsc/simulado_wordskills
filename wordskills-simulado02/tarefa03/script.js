const inputMinimo = document.querySelector("#minimo");
const inputMaximo = document.querySelector("#maximo");
const textoMinimo = document.querySelector("#textoMinimo");
const textoMaximo = document.querySelector("#textoMaximo");
const selecionado = document.querySelector("#selecionado");

const PASSO = 50;
const LIMITE = 1000;

function atualizar(origem) {
  let minimo = Number(inputMinimo.value);
  let maximo = Number(inputMaximo.value);

  if (origem === "minimo" && minimo > maximo - PASSO) {
    minimo = maximo - PASSO;
    inputMinimo.value = minimo;
  }

  if (origem === "maximo" && maximo < minimo + PASSO) {
    maximo = minimo + PASSO;
    inputMaximo.value = maximo;
  }

  textoMinimo.textContent = "$" + minimo;
  textoMaximo.textContent = "$ " + maximo;

  selecionado.style.left = (minimo / LIMITE) * 100 + "%";
  selecionado.style.width = ((maximo - minimo) / LIMITE) * 100 + "%";
}

inputMinimo.addEventListener("input", () => atualizar("minimo"));
inputMaximo.addEventListener("input", () => atualizar("maximo"));

atualizar();
