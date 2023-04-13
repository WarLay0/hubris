$(document).ready(function(){

    // Disparition des images au survol des liens
    $('#icare').hover(function(){
        $('#bgIcare').css('background', 'red')
        setTimeout(()=>{
            $('#bgIcare').css('display', 'none');
        }, 2000)

    }, function(){
        $('#bgIcare').css('display', 'block');
    });

    $('#narcisse').hover(function(){
        $('#bgNarcisse').css('display', 'none');
    }, function(){
        $('#bgNarcisse').css('display', 'block');
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
