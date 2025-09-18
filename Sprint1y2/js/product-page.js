// /Sprint1y2/js/productos-page.js
import { productos } from "./productos.js";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("product-grid");
  const searchInput = document.getElementById("search-input");
  const noResults = document.getElementById("no-results");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Función que genera las tarjetas de producto
  function mostrarProductos(lista) {
    grid.innerHTML = "";

    if (lista.length === 0) {
      noResults.style.display = "block";
      return;
    }

    noResults.style.display = "none";

    lista.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p class="precio">$${p.precio.toLocaleString()}</p>
        <a href="product.html?id=${p.id}" class="btn-primary">Ver más</a>
      `;
      grid.appendChild(card);
    });
  }

  // Mostrar todos al inicio
  mostrarProductos(productos);

  // Búsqueda
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const filtrados = productos.filter(p =>
      p.nombre.toLowerCase().includes(term) ||
      p.descripcion.toLowerCase().includes(term)
    );
    mostrarProductos(filtrados);
  });

  // Filtros por categoría
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Marcar activo
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");

      const categoria = btn.dataset.filter;
      if (categoria === "todos") {
        mostrarProductos(productos);
      } else {
        const filtrados = productos.filter(p => p.categoria === categoria);
        mostrarProductos(filtrados);
      }
    });
  });
});
