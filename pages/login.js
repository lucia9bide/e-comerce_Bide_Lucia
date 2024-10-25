import { user } from "../utils/loginData.js";

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

        const email = form.elements.email.value;
        const password = form.elements.password.value;

        console.log("Email: ", email);
        console.log("Contraseña: ", password);

        if(userData.email === email && userData.password === password){
            localStorage.setItem("userEmail", user);
            window.location.href = "./index.html";
        }else{
            alert("Email o contraseña incorrectos");
        };
});

const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
  window.location.href = "./index.html";
}

console.log(user);