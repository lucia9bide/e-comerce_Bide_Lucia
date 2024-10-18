import { data } from "../utils/data.js";

const id =  Number(window.location.search.split("=")[1]);
const movieFiltered = data.find((movie) => movie.id === id);

let main = document.querySelector("main");

if (movieFiltered) {
    main.innerHTML = `
        <div class="contenedor-peli class="row text-white p-4 rounded-5 shadow-sm">
        <div class="row">
            <div class="col-md-5">
                <img src="${movieFiltered.image}" class="img-fluid mb-4 rounded" alt="${movieFiltered.title}" style="max-width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="col-md-6">
                <h1 class="tituloProducto mb-4">${movieFiltered.title}</h1>
                <p class="descripcion">${movieFiltered.description}</p>
                <p class="precio" >Precio: ${movieFiltered.price}</p>
                <p class="stock">Stock: ${movieFiltered.stock}</p>
                <a href="../index.html" class="volver-inicio">Volver al Home</a>
            </div>
        </div>
    </div>
    `;
} else {
    main.innerHTML = "<p>Pelicula no encontrada</p>";
}

let filteredMovies = data;

const createCards = (filteredMovies) =>{
    const card = filteredMovies.map((movie) => {
        return `<div class="tarjetas col-md-3 mb-3">
                    <div class="card">
                        <img src="${movie.image}" class="card-img-top" alt="Imagen de la pelicula ${movie.title}">
                        <div class="card-body" style="">
                            <div class="textos justify-content-center pb-4">
                                <h5 class="">${movie.title}</h5>
                                <small class="card-genre" style="color: #4481eb;">${movie.genre}</small>
                            </div>
                            <p class="card-text">${movie.description.slice(0, 50)}</p>
                            <a href="/productos/producto.html?prod=${movie.id}" class="boton"> Ver Más </a>
                        </div>
                    </div>
                </div>`;
    });
    
    container.innerHTML = card.join("");
};

const filterMovies = (event) => {
    const movieName = event.target.value.toLowerCase();
    filteredMovies = data.filter((movie) => 
        movie.title.toLowerCase().includes(movieName)
    );

    createCards(filteredMovies);
};

const btnLimpiar = document.querySelector(".btn-limpiar");
btnLimpiar.addEventListener("click", () => {
    input.value = "";
    filteredMovies = data;
    createCards(filteredMovies);
});

const input = document.querySelector(".barra-buscar");
input.addEventListener("input", filterMovies);

createCards(filteredMovies);
