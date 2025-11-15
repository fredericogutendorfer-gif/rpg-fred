const firebaseConfig = {
  apiKey: "SUA-API",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "NUMERO",
  appId: "NUMERO"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  auth.signInWithEmailAndPassword(email, senha)
  .then(user => {
    if (email === "mestre@rpg.com") {
      window.location.href = "mestre.html";
    } else {
      window.location.href = "ficha.html";
    }
  })
  .catch(err => alert(err.message));
}

function cadastrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  auth.createUserWithEmailAndPassword(email, senha)
  .then(() => window.location.href = "index.html")
  .catch(err => alert(err.message));
}

function logout() {
  auth.signOut().then(() => window.location.href = "index.html");
}
