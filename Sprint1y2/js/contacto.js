// /Sprint1y2/js/contacto.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valido = true;

    // Validación Nombre
    const nombre = form.name.value.trim();
    if (nombre.length < 3) {
      mostrarError("name", "El nombre debe tener al menos 3 caracteres");
      valido = false;
    } else {
      limpiarError("name");
    }

    const telefono = form.telefono.value.trim();
    if (telefono && !/^\d{7,15}$/.test(telefono)) {
      mostrarError("telefono", "Ingrese un número de teléfono válido");
      valido = false;
    } else {
      limpiarError("telefono");
    }

    // Validación Email
    const email = form.email.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      mostrarError("email", "Ingresa un correo válido");
      valido = false;
    } else {
      limpiarError("email");
    }

    // Validación Asunto
    const asunto = form.asunto.value;
    if (!asunto) {
      mostrarError("asunto", "Selecciona un asunto");
      valido = false;
    } else {
      limpiarError("asunto");
    }

    // Validación Mensaje
    const mensaje = form.message.value.trim();
    if (mensaje.length === 0) {
      mostrarError("message", "El mensaje no puede estar vacío");
      valido = false;
    } else {
      limpiarError("message");
    }

    // Si todo está bien → mostrar mensaje de éxito
    if (valido) {
      form.reset();
      successMessage.style.display = "block";

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }
  });

  // Funciones auxiliares
  function mostrarError(campo, mensaje) {
    const input = form[campo];
    let errorSpan = document.getElementById(`${campo}-error`);
    if (errorSpan) {
      errorSpan.textContent = mensaje;
      errorSpan.style.display = "block";
    }
    input.classList.add("input-error");
  }

  function limpiarError(campo) {
    const input = form[campo];
    let errorSpan = document.getElementById(`${campo}-error`);
    if (errorSpan) {
      errorSpan.textContent = "";
      errorSpan.style.display = "none";
    }
    input.classList.remove("input-error");
  }
});
