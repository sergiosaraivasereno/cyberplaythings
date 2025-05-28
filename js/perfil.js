import { app } from "./firebase-config.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const auth = getAuth(app);
const botaoPerfil = document.getElementById("botaoPerfil");

onAuthStateChanged(auth, (user) => {
  if (!botaoPerfil) return;

  if (user) {
    botaoPerfil.href = "perfil.html";
    botaoPerfil.textContent = "👤 Meu Perfil";
  } else {
    botaoPerfil.href = "login.html";
    botaoPerfil.textContent = "👤 Login";
  }
});
