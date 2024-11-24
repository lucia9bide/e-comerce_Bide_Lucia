import { user } from "../utils/loginData.js";

const errorText = document.querySelector("#error");

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
        errorText.style.display = "flex";
        form.elements.email.value = "";
        form.elements.password.value = "";
        Toastify({
            text: "En algo te equivocaste flac@.",
            className: "error",
            style: {
              background: "#dc3545",
              color: "#fff",
            },
            duration: 4000,
          }).showToast();
    }
});

/*https://www.youtube.com/watch?v=OsRLKcclsRQ&ab_channel=armxndo*/