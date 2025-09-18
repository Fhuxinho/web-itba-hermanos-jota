// /Sprint1y2/js/index.js
import { productos } from "./productos.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos-destacados");

  if (!contenedor) {
    console.error("No se encontró el contenedor #productos-destacados");
    return;
  }

  // Elegimos 3 destacados (podés cambiar la lógica: random, por categoría, etc.)
  const destacados = productos.slice(0, 3);

  contenedor.innerHTML = "";
  destacados.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <p class="precio">$${p.precio.toLocaleString()}</p>
      <a href="/Sprint1y2/html/products/product.html?id=${p.id}" class="btn-primary">Ver más</a>
    `;
    contenedor.appendChild(card);
  });
});
