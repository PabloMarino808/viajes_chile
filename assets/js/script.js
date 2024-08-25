$(document).ready(function(){

    $('[data-toggle="popover"]').popover();

    // El botón de contacto despliega un popover indicando que se envió el mensaje y limpia el contenido del imput
    $('#btnContacto').click(function(){
        alert("¡Gracias por tu mensaje, nuestros agentes se pondrán en contacto contigo!");
        document.getElementById('formNameInput').value = "";
        document.getElementById('formTitleInput').value = "";
        document.getElementById('formContentInput').value = "";  
    });

    // Continua al siguiente elemento del carousel luego de 10 segundos
    const myCarouselElement = document.querySelector('#carouselHero')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 10000,
    })

    // Al hacer scroll por sobre los 56px el color de fondo del navbar cambia de transparente a negro
    // para que se pueda ver mejor en el resto de la página
    const navEl = document.querySelector('#barranav');
    window.addEventListener('scroll', () => {

        if (window.scrollY >= 56) {
            navEl.classList.add('bg-oscuro')
        }
        else if (window.scrollY < 56) {
            navEl.classList.remove('bg-oscuro')
        }
    })
    
    // Al hacer click la descripción de los elementos de las tarjetas de "quienessomos" aparecen o desaparecen
    $("#quienessomos").on( "click", function() {
        $( ".quienContent").toggle('slow');
    });    
});