document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reservaForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
        if (validarFormulario()) {
            alert('Formulario enviado correctamente.');
            this.submit(); /* Envía el formulario si es válido */
        } else {
            alert('Por favor, corrige los errores en el formulario.');
        }
    });
});

function validarFormulario() {
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let especialista = document.getElementById('especialista').value;
    
    let esValido = true;
    let mensajesError = [];

    /* Validación de la fecha */
    if (!fecha) {
        esValido = false;
        mensajesError.push('Por favor, seleccione una fecha.');
    }

    /* Validación de la hora */
    if (!hora) {
        esValido = false;
        mensajesError.push('Por favor, seleccione una hora.');
    }

    /* Validación del especialista */
    if (especialista.trim() === '') {
        esValido = false;
        mensajesError.push('Por favor, seleccione un especialista.');
    }

    /* Mostrar mensajes de error si los hay */
    if (!esValido) {
        alert(mensajesError.join('\n'));
    }

    return esValido;
}
