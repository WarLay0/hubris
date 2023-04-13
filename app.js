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
        $('.narcisseName').css('left', '53vw');
        $('.narcisseName').css('opacity', '0');

        $('.narcisseImage').css('left', '100vw');
        $('.narcisseImage').css('opacity', '0');

        $('.narcisseTitle').css('top', '105vh');


        $('#bgNarcisse').css('opacity', '0');

        setTimeout(()=>{
            $('#bgNarcisse').css('display', 'none');
            $('.content').css('opacity', '1');
        }, 1000)
    }, function(){

        $('#bgNarcisse').css('display', 'block');
        $('#bgNarcisse').css('opacity', '1');
        $('#bgNarcisse').css('background-color', 'transparent');

        $('.narcisseImage').css('left', '100vw');

        $('.narcisseTitle').css('top', '111vh');


        setTimeout(()=>{
            $('.narcisseImage').css('left', '75vw');
            $('.narcisseImage').css('opacity', '1');

            $('.narcisseName').css('left', '58vw');
            $('.narcisseName').css('opacity', '1');
        }, 200)
        setTimeout(()=>{
            $('#bgNarcisse').css('background-color', 'black');
        }, 500)

        if($('#bgNarcisse').css('display', 'none')){
            $('#bgNarcisse').css('display', 'block');
            setTimeout(()=>{
                $('#bgNarcisse').css('display', 'block');
            }, 1000)
        }
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
