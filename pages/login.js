import { user } from "../utils/loginData.js";
const form = document.querySelector("#form");
const errorText = document.querySelector("#error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  console.log("Email: ", email);
  console.log("Password: ", password);

  if (user.email === email && user.password === password) {
    localStorage.setItem("userEmail", email);
    window.location.href = "./index.html";
  } else {
    errorText.style.display = "flex";
    form.elements.email.value = "";
    form.elements.password.value = "";
  }
});

const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
  window.location.href = "./index.html";
}

console.log(user);

/*const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); https://www.youtube.com/watch?v=OsRLKcclsRQ&ab_channel=armxndo

        const email = form.elements.email.value;
        const password = form.elements.password.value;

        console.log("Email: ", email);
        console.log("Contraseña: ", password);

        if(userData.email === email && userData.password === password){
            localStorage.setItem("email", user);
            window.location.href = "./index.html";
        }else{
            alert("Email o contraseña incorrectos");
        };
});

const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
  window.location.href = "./index.html";
}

console.log(user);*/