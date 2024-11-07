const items = [
    { titulo: "Home", href: "../index.html" },
  ];

const header = document.querySelector(".container_header");
header.innerHTML = `
<nav class="navbar navbar-expand-lg">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav text-light" >
    </ul>
  </div>
</nav>`;

const menu = document.querySelector(".navbar-nav");

for (let item of items) {
    menu.innerHTML += `
        <li class="nav-item">
            <a class="nav-link active fs-5" href="${item.href}">${item.titulo}</a>
        </li>
    `;
};