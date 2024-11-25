const cardSection = document.querySelector(".cart-cards");

function getCards (cards){
  if (!cards || cards.length === 0) {
    cardSection.innerHTML = `<p>El carrito está vacío</p>`;
    totalElement.textContent = "$0"; 
    return;
}  
  const list = cards.map(
    card => `
    <div class="container">
      <div class="d-flex align-items-start pb-3">
        <div class="me-4">
          <img src="${card.product.image}" alt="${card.product.title}" class="cart-item-image rounded me-3" style="max-width: 300px;min-width: 300px; width:100%; max-height: 150px;min-height: 150px; height:100%;">
        </div>
        <div class="cart-item-details d-flex justify-content-between w-100">
          <div class="flex-column justify-content-start  mb-3" style="gap: 10px;">
          <h4 class="cart-item-title" style= "color: #f5f5f5;">${card.product.title}</h4>
            <p class="cart-item-price fs-6 mb-0">Precio: ${card.product.price}</p>
            <p class="cart-item-quantity mb-0">Cantidad: ${card.quantity}</p>
            <p class="cart-item-total-pric mb-3">Precio Total: $${card.product.price * card.quantity} </p>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${card.id})">Eliminar</button>
          </div>
        </div>
      </div>
    </div>`);

  
  cardSection.innerHTML = list.join("")

};

getCards(JSON.parse(localStorage.getItem("cart")));

function total(cards){
  
  let cartTotal = document.querySelector("#cart-total")
    let total = cards.reduce(
    (acumulado, actual) => acumulado + actual.product.price * actual.quantity, 0
    )
    cartTotal.innerHTML = "$" + total
}

total(JSON.parse(localStorage.getItem("cart")));

function removeFromCart(id) {
  function remove(){
  const cards = JSON.parse(localStorage.getItem("cart"));
  const newCards = cards.filter(card => card.id !== id);
  localStorage.setItem("cart", JSON.stringify(newCards));

  getCards(newCards);
  total(newCards);

  let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
  localStorage.setItem("quantity", quantity);

  const quantityTag = document.querySelector(".quantity");
  quantityTag.innerText = quantity

  Toastify({
      text: "Eliminado correctamente",
      duration: 3000,
      style: {
        background: "#DB5079",
      },
    }).showToast();

}
Swal.fire({
  text: "¿Estás seguro?",
  confirmButtonText: "Si",
  cancelButtonText: "No",
  showCancelButton: true,
  showCloseButton: true,
  confirmButtonColor: "#06f",
  cancelButtonColor: "#DB5079",
}).then(result => {
  if (result.isConfirmed)
    remove();
});
};

function clearCart(){
  localStorage.setItem("cart", "[]");
  localStorage.setItem("quantity", "0");

  Toastify({
    text: "Carrito vaciado correctamente",
    duration: 3000,
    style: {
      background: "#DB5079",
    },
  }).showToast();  
}


const btnCheckout = document.querySelector("#btn-checkout");
btnCheckout.addEventListener("click", (event) => {
    event.preventDefault(); // hay wque evitar la recarga, porque está envuelto en un href
    checkout(); 
});

function checkout() {    

    const recurso = {
        user: localStorage.getItem("email"),
        items: JSON.parse(localStorage.getItem("cart")),
    }
    console.log("RECURSO : " + recurso);

    fetch("https://67367b0baafa2ef222309f81.mockapi.io/cart/orders", 
        {
            method: "POST",
            body: JSON.stringify(recurso),
        }
    )
    .then(response => response.json())
    .then(data => {
         console.log(data);
        Swal.fire({
            text: `Gracias ${data.user} por tu compra. Hemos registrado su orden número #${data.id}`,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#06f",
        });
        clearCart();
    })

    .catch(() => 
      Swal.fire({ 
            text: "Hubo un error al realizar la compra",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#06f",
        })
    ) 
}