// /Sprint1y2/js/product.js
import { productos } from "/sprint1y2/js/productos.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id")); // obtener id de la URL
  const contenedor = document.getElementById("product-loading");
  const relacionadosContainer = document.getElementById("related-products");
  const btnCarrito = document.getElementById("add-to-cart");

  if (!id) {
    contenedor.innerHTML = "<p>Producto no encontrado</p>";
    return;
  }

  const producto = productos.find(p => p.id === id);

  if (!producto) {
    contenedor.innerHTML = "<p>Producto no encontrado</p>";
    return;
  }

  // Renderizar detalle del producto
  contenedor.innerHTML = `
    <div class="product-detail">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="product-info">
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion}</p>
        <p class="precio">$${producto.precio.toLocaleString()}</p>
        <button id="btnAgregar" class="btn-primary">Añadir al carrito</button>
      </div>
    </div>
  `;

  // Botón añadir al carrito
  document.getElementById("btnAgregar").addEventListener("click", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar contador del carrito (si existe en el header)
    const contador = document.querySelector(".cart-count");
    if (contador) {
      contador.textContent = carrito.length;
    }

    alert(`${producto.nombre} se agregó al carrito`);
  });

  // Productos relacionados (misma categoría, excluyendo el actual)
  const relacionados = productos.filter(p => p.categoria === producto.categoria && p.id !== producto.id).slice(0, 3);

  relacionadosContainer.innerHTML = "";
  relacionados.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p class="precio">$${p.precio.toLocaleString()}</p>
      <a href="product.html?id=${p.id}" class="btn-primary">Ver más</a>
    `;
    relacionadosContainer.appendChild(card);
  });
});
