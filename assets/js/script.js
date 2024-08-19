$(document).ready(function(){

    const navEl = document.querySelector('#barranav');
    window.addEventListener('scroll', () => {

        if (window.scrollY >= 56) {
            navEl.classList.add('bg-oscuro')
        }
        else if (window.scrollY < 56) {
            navEl.classList.remove('bg-oscuro')
        }
    })


    $('.whoarewe').on('click', () => {
        $('barranav').css(
            'background-color', 'black'
        );
    });
    
    $(".titulo-tarjeta").on( "click", function() {
        $( ".contenido-tarjeta").toggle('slow');
    });    
});