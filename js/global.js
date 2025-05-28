document.addEventListener("DOMContentLoaded", () => {
  const icone = document.querySelector(".contador-carrinho");
  if (!icone) return;

  let total = 0;
  const local = JSON.parse(localStorage.getItem("carrinho")) || [];
  local.forEach(p => total += p.quantidade);
  icone.textContent = total > 0 ? total : "";
});
