// ======================
// Firebase inicialização
// ======================
import { 
  initializeApp 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

<script type="module">
  // Importar funções
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  import { getFirestore, collection, addDoc, setDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCSHUXa29ratZ5Cmo36jUOVew2pA82BG84",
    authDomain: "rpg-fred.firebaseapp.com",
    projectId: "rpg-fred",
    storageBucket: "rpg-fred.firebasestorage.app",
    messagingSenderId: "687646864182",
    appId: "1:687646864182:web:0235bb545b5f397a45b997"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { auth, db, signInWithEmailAndPassword, onAuthStateChanged, signOut, collection, addDoc, setDoc, doc, onSnapshot };
</script>


import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Configuração do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSHUXa29ratZ5Cmo36jUOVew2pA82BG84",
  authDomain: "rpg-fred.firebaseapp.com",
  projectId: "rpg-fred",
  storageBucket: "rpg-fred.firebasestorage.app",
  messagingSenderId: "687646864182",
  appId: "1:687646864182:web:0235bb545b5f397a45b997"
};

// Inicializar o app
export const app = initializeApp(firebaseConfig);

// Exportar Auth e Firestore para uso em outros arquivos
export const auth = getAuth(app);
export const db = getFirestore(app);

// Exportar funções para facilitar
export {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  onSnapshot
};
