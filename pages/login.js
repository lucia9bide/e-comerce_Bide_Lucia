import { user } from "../utils/loginData.js";

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    console.log("Email: ", email);
    console.log("Password: ", password);

    if (user.email === email && user.password === password){
        let quantity = 0;

        localStorage.setItem("userMail", email);

        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("quantity", quantity);

        window.location.href = "../index.html";
    }else{
        form.elements.email.value = "";
        form.elements.password.value = "";
    }
});

/*https://www.youtube.com/watch?v=OsRLKcclsRQ&ab_channel=armxndo*/