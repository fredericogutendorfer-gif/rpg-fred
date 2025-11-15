auth.onAuthStateChanged(user => {
  if (!user) return window.location.href = "index.html";
  if (user.email !== "mestre@rpg.com") return window.location.href = "ficha.html";

  db.collection("fichas").onSnapshot(snap => {
    let html = "";
    snap.forEach(doc => {
      const f = doc.data();
      html += `
        <div class="fichaItem">
          <h3>${f.nome}</h3>
          <p>Classe: ${f.classe}</p>
          <p>Vida: ${f.vida}</p>
          <p>EA: ${f.ea}</p>
        </div>
      `;
    });
    document.getElementById("listaFichas").innerHTML = html;
  });
});

function criarBoss() {
  db.collection("bosses").add({
    nome: bossNome.value,
    vida: bossVida.value,
    ea: bossEA.value,
    habilidades: bossHab.value
  });

  alert("Boss criado!");
}
