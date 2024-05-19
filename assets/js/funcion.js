const cambiarFondoBody = document.getElementById('bodyId');
const bodyClick =addEventListener('click', function(){
 const colores = ["red", "blue", "green", "orange", "purple"];
const cambiarColor = colores[Math.floor(Math.random() * colores.length)]
cambiarFondoBody.style.backgroundColor = cambiarColor
})
