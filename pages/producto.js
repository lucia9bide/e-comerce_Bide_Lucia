import { data } from "../utils/data.js";

const id =  Number(window.location.search.split("=")[1]);
const movieFiltered = data.find((movie) => movie.id === id);

let peliculaSola = document.querySelector("section");

const userEmail = localStorage.getItem("userMail");
const isLoggedIn = Boolean(userEmail);

if (movieFiltered) {
    peliculaSola.innerHTML = `
      <div class="contenedor-peli class="row text-white p-4 rounded-5 shadow-sm">
        <div class="row">
            <div class="col-md-5">
                <img src="${movieFiltered.image}" class="img-fluid" alt="${movieFiltered.title}" style="max-width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="col-md-5">
                <h1 class="tituloProducto mb-4">${movieFiltered.title}</h1>
                <p class="descripcion">${movieFiltered.description}</p>
                <p class="precio" >Precio: ${movieFiltered.price}</p>
                <div>
                <p class="stock">Stock: ${movieFiltered.stock}</p>


            ${
              isLoggedIn
                ? `<div class="d-flex align-items-center gap-2 mb-3 w-100">
                    <button id="decrease" class="btn btn-secondary btn-md" onclick="decreaseBtn()" >-</button>
                    <input type="number" id="quantity" min="1" value="1" class="form-control text-center flex-grow-1" />
                    <button id="increase" class="btn btn-secondary btn-md" onclick="increaseBtn()">+</button>
                  </div>
                  <button id="additem" class="btn btn-primary w-100 mt-2 mb-4" style="font-weight: 600">Agregar al carrito</button>`
                : `<button onclick='window.location.href = "./login.html"' class="btn btn-primary w-100 mt-2 mb-4">Iniciar sesión</button>`
            }
          </div>
            </div>  
        </div>
    </div>
    `;

    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const addItemBtn = document.getElementById("additem");

    const quantityInput = document.getElementById("quantity");

    decreaseBtn.addEventListener("click", () => {
      const currentCuantity = Number(quantityInput.value);
  
      if (currentCuantity > 1) {
        quantityInput.value = currentCuantity - 1;
      }
    });

    increaseBtn.addEventListener("click", () => {
      const currentCuantity = Number(quantityInput.value);
  
      if (currentCuantity < movieFiltered.stock) {
        quantityInput.value = currentCuantity + 1;
      }
    });

    addItemBtn.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const idProduct = movieFiltered.id;
  
      const product = data.find((item) => item.id === idProduct);
      const existedIdInCart = cart.some((item) => item.id === idProduct);
  
      const quantityToAdd = Number(quantityInput.value);
  
      if (existedIdInCart) {
        cart = cart.map((movie) => {
          if (movie.id === idProduct) {
            return { ...movie, quantity: movie.quantity + quantityToAdd };
          } else {
            return movie;
          }
        });
      } else {
        if (product) {
          cart.push({ product: product, id: idProduct, quantity: quantityToAdd });
        }
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
  
      let totalQuantity = 0;
  
      for (const item of cart) {
        totalQuantity += item.quantity;
      }
  
      localStorage.setItem("quantity", totalQuantity);
  
      Toastify({
        text: "Producto agregado al carrito con éxito!",
        className: "info",
        style: {
          background: "#218838",
        },
      }).showToast();
    });

    } else {
      const main = document.querySelector("main");
      main.innerHTML = `<p>Producto no encontrado.</p>`;
}
