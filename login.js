import { auth, signInWithEmailAndPassword } from './firebase.js';

const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const erro = document.getElementById("erro");

document.getElementById("btnLogin").onclick = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailInput.value, senhaInput.value);
    const user = userCredential.user;
    
    // Redirecionar mestre ou jogador
    if (user.email === "mestre@rpg.com") {
      window.location.href = "mestre.html";
    } else {
      window.location.href = "jogador.html";
    }
  } catch (e) {
    erro.textContent = "Login inválido";
    console.error(e);
  }
};
