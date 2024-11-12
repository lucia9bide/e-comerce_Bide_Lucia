const items = [
    { titulo: "Home", href: "../index.html" },
  ];

const email = localStorage.getItem("emailUser");
const quantity = localStorage.getItem("quantity");

const header = document.querySelector(".container_header");
header.innerHTML = `
<nav class="navbar navbar-expand-lg">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    </ul>
    <div class="d-flex flex-row align-items-center gap-4 d-none d-lg-flex">
            ${email? `<div>
                    <span class="text-white">Hola, ${email}</span>
                  </div>`
                : `<button onclick='window.location.href = "./login.html"' class="btn btn-primary">Iniciar sesión</button>`
            }
            <a href="./pages/cart.html" style="color: #e0e0e0; text-decoration: none;">
              <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.50014 17H17.3294C18.2793 17 18.7543 17 19.1414 16.8284C19.4827 16.6771 19.7748 16.4333 19.9847 16.1246C20.2228 15.7744 20.3078 15.3071 20.4777 14.3724L21.8285 6.94311C21.8874 6.61918 21.9169 6.45721 21.8714 6.33074C21.8315 6.21979 21.7536 6.12651 21.6516 6.06739C21.5353 6 21.3707 6 21.0414 6H5.00014M2 2H3.3164C3.55909 2 3.68044 2 3.77858 2.04433C3.86507 2.0834 3.93867 2.14628 3.99075 2.22563C4.04984 2.31565 4.06876 2.43551 4.10662 2.67523L6.89338 20.3248C6.93124 20.5645 6.95016 20.6843 7.00925 20.7744C7.06133 20.8537 7.13493 20.9166 7.22142 20.9557C7.31956 21 7.44091 21 7.6836 21H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <b>${quantity}</b>
            </a>
          </div>
  </div>
</nav>`;

const menu = document.querySelector(".navbar-nav");

for (let item of items) {
    menu.innerHTML += `
        <li class="nav-item">
            <a class="nav-link active fs-5 text-white" href="${item.href}">${item.titulo}</a>
        </li>
    `;
};