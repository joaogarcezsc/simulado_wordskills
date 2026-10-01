const textoOriginal =
  "This is a WorldSkills Competition Paper D. In this paper, you are expected to design a poster to welcome visitors to your country.";

document.querySelector("#buscar").addEventListener("click", () => {
  const termo = document.querySelector("#input").value;

  if (termo === "") {
    document.querySelector("#contador").textContent = "0 occurrences found.";
    return;
  }

  // O .split() corta o texto onde tem a palavra
  // O número de ocorrências é a quantidade de pedaços menos 1
  const contador = textoOriginal.split(termo).length - 1;

  document.querySelector("#contador").textContent = `${contador} occurrences found.`;
});