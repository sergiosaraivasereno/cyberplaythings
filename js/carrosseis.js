import { app } from "./firebase-config.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

const db = getFirestore(app);

async function montarCarrosseisDinamicos() {
  const snapCarrosseis = await getDocs(collection(db, "carrosseis"));
  const snapProdutos = await getDocs(collection(db, "produtos"));

  const produtos = [];
  snapProdutos.forEach(doc => produtos.push(doc.data()));

  snapCarrosseis.forEach(doc => {
    const { nome, tag } = doc.data();

    const filtrados = produtos.filter(p =>
      (p.tags || []).map(t => t.toLowerCase()).includes(tag.toLowerCase())
    ).slice(0, 6);

    if (filtrados.length === 0) return;

    const secao = document.createElement("section");
    secao.style.margin = "60px auto";
    secao.style.padding = "0 20px";
    secao.innerHTML = `
      <h2 style="color:#4db8ff; margin-bottom: 15px;">${nome}</h2>
      <div style="display: flex; overflow-x: auto; gap: 20px; scroll-snap-type: x mandatory;">
        ${filtrados.map(prod => `
          <div style="min-width: 160px; flex: 0 0 auto; background:#1a1a1a; padding: 10px; border-radius:12px; box-shadow: 0 0 10px rgba(0,0,0,0.3); scroll-snap-align: start;">
            <img src="${prod.imagem}" style="width: 100%; height: 120px; object-fit: contain; border-radius: 8px;">
            <h4 style="color:white; margin: 8px 0 4px;">${prod.nome}</h4>
            <div style="color:#ff9800; font-weight: bold;">R$ ${prod.preco.toFixed(2)}</div>
          </div>
        `).join("")}
      </div>
    `;
    const conteudo = document.getElementById("conteudoSite");
    conteudo.appendChild(secao);
  });
}

montarCarrosseisDinamicos();
