
import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const loginForm = document.getElementById("loginForm");
const registerBtn = document.getElementById("registerBtn");
const message = document.getElementById("message");

function showMessage(text) {
    message.textContent = text;
}

// CADASTRO
registerBtn.addEventListener("click", async () => {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        showMessage("Preencha todos os campos!");
        return;
    }

    if (password.length < 6) {
        showMessage("A senha precisa ter 6 caracteres ou mais.");
        return;
    }

    try {
        showMessage("Criando sua conta...");

        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await setDoc(doc(db, "users", result.user.uid), {
            name: name,
            online: true,
            photoURL: ""
        });

        showMessage("Conta criada com sucesso!");

        window.location.href = "chat.html";

    } catch (error) {
        console.error(error);
        showMessage("Erro: " + error.message);
    }
});

// LOGIN
loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        showMessage("Entrando...");

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        window.location.href = "chat.html";

    } catch (error) {
        console.error(error);
        showMessage("Não foi possível entrar. Confira seus dados.");
    }
});
