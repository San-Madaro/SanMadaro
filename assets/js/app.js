document.addEventListener("DOMContentLoaded", function() {
    const titulos = document.querySelectorAll('.titulo-servicio');
  
    titulos.forEach(titulo => {
      titulo.addEventListener('click', () => {
        const descripcion = titulo.nextElementSibling;
        descripcion.classList.toggle('mostrar');
      });
    });
  });