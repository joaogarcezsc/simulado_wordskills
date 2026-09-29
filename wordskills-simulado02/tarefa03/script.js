const inputMinimo = document.getElementById("minimo");
const inputMaximo = document.getElementById("maximo");
const textoMinimo = document.getElementById("textoMinimo");
const textoMaximo = document.getElementById("textoMaximo");
const selecionado = document.getElementById("selecionado");

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
