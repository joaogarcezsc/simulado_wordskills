function getType(valor) {
  try {
    const valorConvertido = JSON.parse(valor);
    return typeof valorConvertido;
  } catch (e) {
    // Se for um texto comum (que não é JSON válido), continua sendo string
    return typeof valor;
  }
}

document.querySelector("#descobrir").addEventListener("click", () => {
  valor = document.querySelector("#entradaValor").value;
  tipoValor = getType(valor);
  document.querySelector("#resultado").textContent = tipoValor;
});
