import { data } from "../utils/data.js";

const id =  Number(window.location.search.split("=")[1]);
const movieFiltered = data.find((movie) => movie.id === id);

let peliculaSola = document.querySelector("section");

if (movieFiltered) {
    peliculaSola.innerHTML = `
        <div class="contenedor-peli class="row text-white p-4 rounded-5 shadow-sm">
        <div class="row">
            <div class="col-md-5">
                <img src="${movieFiltered.image}" class="img-fluid mb-4" alt="${movieFiltered.title}" style="max-width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="col-md-6">
                <h1 class="tituloProducto mb-4">${movieFiltered.title}</h1>
                <p class="descripcion">${movieFiltered.description}</p>
                <p class="precio" >Precio: ${movieFiltered.price}</p>
                <p class="stock">Stock: ${movieFiltered.stock}</p>
            </div>
            
        </div>
    </div>
    `;
} else {
    peliculaSola.innerHTML = "<p>Pelicula no encontrada</p>";
}

