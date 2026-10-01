const valoresRomanos = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function converterParaDecimal(texto) {
  const entrada = texto.trim().toUpperCase();

  if (!isNaN(entrada)) return Number(entrada);

  let total = 0;

  Array.from(entrada).forEach((caractere, i) => {
    const atual = valoresRomanos[caractere];
    const proximo = valoresRomanos[entrada[i + 1]] || 0;

    if (atual < proximo) {
      total -= atual;
    } else {
      total += atual;
    }
  });
  return total;
}

document.querySelector("#converter").addEventListener("click", () => {
  const texto = document.querySelector("#entradaRomano").value;
  const decimal = converterParaDecimal(texto);
  document.querySelector("#resultadoRomano").textContent =
    "Decimal: " + decimal;
});
