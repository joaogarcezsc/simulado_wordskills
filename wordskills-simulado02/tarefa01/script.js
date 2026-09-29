const valoresRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function converterParaDecimal(texto) {
  const entrada = texto.trim().toUpperCase();

  if (/^\d+$/.test(entrada)) {
    return Number(entrada);
  }

  if (entrada === "") {
    throw new Error("Digite numeral romano ou um numeral inteiro.");
  }

  if (!/^[IVXLCDM]+$/.test(entrada)) {
    throw new Error(
      "Entrada inválida. Use apenas I, V, X, L, C, D, M ou um número inteiro.",
    );
  }

  const regexRomanoValido =
    /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  if (!regexRomanoValido.test(entrada) || entrada === "") {
    throw new Error("Número romano inválido");
  }

  let total = 0;

  Array.from(entrada).forEach((i) => {
    const atual = valoresRomanos[i];
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
  const saida = document.querySelector("#resultadoRomano");
  const texto = document.querySelector("#entradaRomano").value;

  try {
    const decimal = converterParaDecimal(texto);
    saida.textContent = "Decimal: " + decimal;
  } catch (erro) {
    saida.className = "resultado erro";
    saida.textContent = erro.message;
  }
});
