
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDPneg4HLnTpjcxaP1ainlRGZpXneoW_BQ",
    authDomain: "banco-de-dados-92e5e.firebaseapp.com",
    projectId: "banco-de-dados-92e5e",
    storageBucket: "banco-de-dados-92e5e.firebasestorage.app",
    messagingSenderId: "523200159370",
    appId: "1:523200159370:web:386e327cbeccc2c1b6d773",
    measurementId: "G-3L1Y5YJGDC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Autenticação
const auth = getAuth(app);

// Banco de dados
const db = getFirestore(app);

// Exportar conexões
export { app, auth, db };
