// Toma las clases grande y punto para poder hacer el cambio/desplazamiento de las etiquetas*/
const grande= document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach((cadaPunto , i) => {
    punto[i].addEventListener('click',()=>{

        let posicion = i;
        let operacion = posicion * -(100/5); /*width = 100% / X imagenes */

        grande.style.transform = `translateX(${ operacion }%)`;

        punto.forEach((cadaPunto , i)=>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');



    })
})