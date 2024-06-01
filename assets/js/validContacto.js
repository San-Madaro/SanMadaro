document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", function(event) {
        let esValido = true;

        // Validación de nombre
        const nombre = document.getElementById("nombre");
        const errorNombre = document.getElementById("errorNombre");
        const regexNombre = /^[a-zA-Z\s]+$/;
        if (nombre.value.trim() === "") {
            errorNombre.textContent = "El nombre es obligatorio.";
            esValido = false;
        } else if (!regexNombre.test(nombre.value.trim())) {
            errorNombre.textContent = "El nombre solo puede contener letras.";
            esValido = false;
        } else {
            errorNombre.textContent = "";
        }

        // Validación de teléfono
        const telefono = document.getElementById("telefono");
        const errorTelefono = document.getElementById("errorTelefono");
        const regexTelefono = /^[0-9]{13}$/; // Expresión regular para 13 dígitos numéricos
        if (!regexTelefono.test(telefono.value.trim())) {
            errorTelefono.textContent = "El teléfono debe tener exactamente 13 dígitos numéricos.";
            esValido = false;
        } else {
            errorTelefono.textContent = "";
        }

        // Validación de asunto
        const asunto = document.getElementById("asunto");
        const errorAsunto = document.getElementById("errorAsunto");
        if (asunto.value.trim() === "") {
            errorAsunto.textContent = "El asunto es obligatorio.";
            esValido = false;
        } else {
            errorAsunto.textContent = "";
        }

        // Validación de mensaje
        const mensaje = document.getElementById("mensaje");
        const errorMensaje = document.getElementById("errorMensaje");
        if (mensaje.value.trim() === "") {
            errorMensaje.textContent = "El mensaje es obligatorio.";
            esValido = false;
        } else {
            errorMensaje.textContent = "";
        }

        // Si no es válido, prevenimos el envío del formulario
        if (!esValido) {
            event.preventDefault();
        }
    });
});
