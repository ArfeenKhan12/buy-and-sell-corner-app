import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";

let form = document.querySelector("#form")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#loginBtn")

form.addEventListener('submit', event => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if ( email.value = email.value ) {
            window.location = "./index.html";
        }
        });
})