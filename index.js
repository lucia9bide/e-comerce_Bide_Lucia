import { data } from "./utils/data.js";

const container = document.querySelector(".container");
const categorias = document.querySelector(".categorias")

const titulo = document.querySelector("h1");
titulo.innerText = "Catálogo";

let filteredMovies = data;

const createCards = (filteredMovies) => {
    const card = filteredMovies.map((movie) => {
        return `<div class="tarjetas col-md-4 mb-3">
                    <div class="card">
                      <a href="/pages/producto.html?prod=${movie.id}" class="verMas">
                        <img src="${movie.image}" class="card-img-top" alt="Imagen de la pelicula ${movie.title}">
                         ${movie.stock === 0
                              ? `<div class="position-absolute top-0 end-0 m-1 p-1 bg-danger text-white fw-bold rounded">
                                  Sin stock
                                </div>`
                              : ""
                          }
                        <div class="card-body" style="">
                            <div class="textos pb-4">
                                <h5 class=" justify-content-center">${movie.title}</h5>
                                <small class="card-genre" style="color: #4481eb;">${movie.genre}</small>
                            </div>
                            <p class="card-text">${movie.description.slice(0, 100)}...</p>

                        </div>
                      </a>
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

const genres = [
    "Todo",
    "Animación",
    "Acción",
    "Drama",
    "Ciencia Ficción",
    "Documental",
    "Romance",
    "Comedia",
    "Crimen",
    "Terror",
    "Thriller",
    "Musical",
  ];
  
  const botones = genres.map(
    (genre) => `
    <button class="genre-button">${genre}</button>
  `
  );

categorias.innerHTML = botones.join("");

const filterMoviesByGenre = (genre) => {
    let filteredMovies;
    if (genre === "Todo") {
      filteredMovies = data;
    } else {
      filteredMovies = data.filter((movie) =>
        movie.genre.toLowerCase().includes(genre.toLowerCase())
      );
    }
    createCards(filteredMovies);
  };
  
  // Agregando eventos a los botones de género
  const genreButtons = document.querySelectorAll(".genre-button");
  genreButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      filterMoviesByGenre(event.target.innerText);
    });
  });
  
  // Mostrando todas las películas al inicio
  createCards(data);

