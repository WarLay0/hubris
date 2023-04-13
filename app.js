$(document).ready(function(){

    // Disparition des images au survol des liens
    $('#icare').hover(function(){
        //animation dans le css
        setTimeout(()=>{
            $('#bgIcare').css('display', 'none');
        }, 000)

    }, function(){
        $('#bgIcare').css('display', 'block');
    });

    $('#narcisse').hover(function(){
        //animation dans le css
        setTimeout(()=>{
            $('#bgNarcisse').css('display', 'none');
        }, 1000)
    }, function(){
        $('#bgNarcisse').css('display', 'block');
        $('#bgNarcisse').css('background-color', 'transparent');
        $('.narcisseImage').css('left', '85vw');
        setTimeout(()=>{
            $('.narcisseImage').css('left', '75vw');
            $('#bgNarcisse').css('background-color', 'black');
        }, 300)

    });

    $('#midas').hover(function(){
        $('#bgMidas').css('display', 'none');
    }, function(){
        $('#bgMidas').css('display', 'block');
    });

    // Scoller à un endroit précis dans la page, 100vh
    $('#headerToMain').click(function(){
        $('html, body').animate({
            scrollTop: $('#main').offset().top
        }, 500 );        
    })
})
