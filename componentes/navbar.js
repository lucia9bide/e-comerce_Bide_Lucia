const items = [
    {titulo: "Home", href: "../index.html"},
];

const header = document.querySelector("header");

header.innerHTML = `
    <nav class="navbar px-5 p-4" style="height: 80px;">
        <div class="container-fluid">
            <div>
                <ul class="navbar-nav">
                </ul>
            </div>
        </div>
    </nav>`;
 
const botones = [
    { title: "Home", href: "../index.html" },
];

const menu = document.querySelector(".navbar-nav");

for (let boton of botones) {
    menu.innerHTML += `
        <li class="nav-item link-underline-opacity-100-hover">
            <a class="nav-link active text-white" aria-current="page" href="${boton.href}">${boton.title}</a>
        </li>
    `;
};


