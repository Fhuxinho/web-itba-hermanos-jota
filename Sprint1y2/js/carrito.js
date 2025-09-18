// /Sprint1y2/js/carrito.js
document.addEventListener("DOMContentLoaded", () => {
  actualizarContador();

  function actualizarContador() {
    const contador = document.querySelector(".cart-count");
    if (!contador) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contador.textContent = carrito.length;
  }

  // Escuchar cambios en el storage (por si abrís varias pestañas)
  window.addEventListener("storage", actualizarContador);
});
