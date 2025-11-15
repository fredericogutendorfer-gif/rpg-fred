auth.onAuthStateChanged(user => {
  if (!user) return window.location.href = "index.html";

  const uid = user.uid;

  db.collection("fichas").doc(uid).get().then(doc => {
    if (doc.exists) {
      const f = doc.data();
      document.getElementById("nome").value = f.nome || "";
      document.getElementById("classe").value = f.classe || "";
      document.getElementById("vida").value = f.vida || "";
      document.getElementById("sanidade").value = f.sanidade || "";
      document.getElementById("ea").value = f.ea || "";
      document.getElementById("inventario").value = f.inventario || "";
      document.getElementById("habilidades").value = f.habilidades || "";
      document.getElementById("historico").value = f.historico || "";
      document.getElementById("foto").value = f.foto || "";
    }
  });
});

function salvarFicha() {
  const uid = auth.currentUser.uid;

  db.collection("fichas").doc(uid).set({
    nome: nome.value,
    classe: classe.value,
    vida: vida.value,
    sanidade: sanidade.value,
    ea: ea.value,
    inventario: inventario.value,
    habilidades: habilidades.value,
    historico: historico.value,
    foto: foto.value
  });

  alert("Ficha salva!");
}
