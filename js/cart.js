import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const container = document.getElementById("carrinho-container");
  const totalSpan = document.getElementById("valor-total");
  container.innerHTML = "";
  let total = 0;

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio 😢</p>";
    totalSpan.textContent = "R$ 0,00";
    return;
  }

  for (const item of carrinho) {
    const docRef = doc(db, "produtos", item.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const produto = docSnap.data();
      const subtotal = produto.preco * item.quantidade;
      total += subtotal;

      const card = document.createElement("div");
      card.classList.add("item-carrinho");
      card.innerHTML = `
        <img src="${produto.imagemPrincipal}" alt="${produto.nome}">
        <div class="info">
          <h3>${produto.nome}</h3>
          <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
          <div class="quantidade">
            <button class="menos" data-id="${item.id}">−</button>
            <span>${item.quantidade}</span>
            <button class="mais" data-id="${item.id}">+</button>
          </div>
          <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
        </div>
      `;
      container.appendChild(card);
    }
  }

  totalSpan.textContent = `R$ ${total.toFixed(2)}`;
  adicionarListeners();
}

function adicionarListeners() {
  document.querySelectorAll(".mais").forEach(btn => {
    btn.addEventListener("click", () => {
      alterarQuantidade(btn.dataset.id, 1);
    });
  });

  document.querySelectorAll(".menos").forEach(btn => {
    btn.addEventListener("click", () => {
      alterarQuantidade(btn.dataset.id, -1);
    });
  });
}

function alterarQuantidade(id, delta) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const index = carrinho.findIndex(item => item.id === id);
  if (index >= 0) {
    carrinho[index].quantidade += delta;
    if (carrinho[index].quantidade <= 0) {
      carrinho.splice(index, 1);
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho();
  }
}

document.addEventListener("DOMContentLoaded", carregarCarrinho);
