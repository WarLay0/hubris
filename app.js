$(document).ready(function(){

    // Disparition des images au survol des liens
    $('#icare').hover(function(){
        $('.icareName').css('left', '-10vw');
        $('.icareName').css('opacity', '0');

        $('.icareImage').css('top', '-20vh');
        $('.icareImage').css('opacity', '0');

        $('.icareTitle').css('top', '93vh');
        $('.icareTitle').css('opacity', '0');

        $('#bgIcare').css('opacity', '0');

        timer = setTimeout(()=>{
            $('#bgIcare').css('display', 'none');
            $('.content').css('opacity', '1');
        }, 1000)
    }, function(){
        clearTimeout(timer);
        $('.content').css('opacity', '0');

        $('#bgIcare').css('display', 'block');
        $('#bgIcare').css('opacity', '1');
        $('#bgIcare').css('background-color', 'transparent');

        setTimeout(()=>{
            $('.icareTitle').css('top', '88vh');
            $('.icareTitle').css('opacity', '1');

            $('.icareImage').css('top', '-10vh');
            $('.icareImage').css('opacity', '1');

            $('.icareName').css('left', '-5vw');
            $('.icareName').css('opacity', '1');
        }, 200)
        setTimeout(()=>{
            $('#bgIcare').css('background-color', 'black');
        }, 500)
    });

    $('#narcisse').hover(function(){
        $('.narcisseName').css('left', '56vw');
        $('.narcisseName').css('opacity', '0');

        $('.narcisseImage').css('left', '85vw');
        $('.narcisseImage').css('opacity', '0');

        $('.narcisseTitle').css('top', '106vh');
        $('.narcisseTitle').css('opacity', '0');

        $('#bgNarcisse').css('opacity', '0');

        timer = setTimeout(()=>{
            $('#bgNarcisse').css('display', 'none');
            $('.content').css('opacity', '1');
        }, 1000)
    }, function(){
        clearTimeout(timer);
        $('.content').css('opacity', '0');

        $('#bgNarcisse').css('display', 'block');
        $('#bgNarcisse').css('opacity', '1');
        $('#bgNarcisse').css('background-color', 'transparent');

        setTimeout(()=>{
            $('.narcisseTitle').css('top', '111vh');
            $('.narcisseTitle').css('opacity', '1');

            $('.narcisseImage').css('left', '75vw');
            $('.narcisseImage').css('opacity', '1');

            $('.narcisseName').css('left', '58vw');
            $('.narcisseName').css('opacity', '1');
        }, 200)
        setTimeout(()=>{
            $('#bgNarcisse').css('background-color', 'black');
        }, 500)
    });

    

    $('#midas').hover(function(){
        $('.midasName').css('left', '19vw');
        $('.midasName').css('opacity', '0');

        $('.midasImage').css('top', '45vh');
        $('.midasImage').css('opacity', '0');

        $('.midasTitle').css('top', '5vh');
        $('.midasTitle').css('opacity', '0');

        $('#bgMidas').css('opacity', '0');

        timer = setTimeout(()=>{
            $('#bgMidas').css('display', 'none');
            $('.content').css('opacity', '1');
        }, 1000)
    }, function(){
        clearTimeout(timer);
        $('.content').css('opacity', '0');

        $('#bgMidas').css('display', 'block');
        $('#bgMidas').css('opacity', '1');
        $('#bgMidas').css('background-color', 'transparent');

        setTimeout(()=>{
            $('.midasTitle').css('top', '10vh');
            $('.midasTitle').css('opacity', '1');

            $('.midasImage').css('top', '40vh');
            $('.midasImage').css('opacity', '1');

            $('.midasName').css('left', '17vw');
            $('.midasName').css('opacity', '1');
        }, 200)
        setTimeout(()=>{
            $('#bgMidas').css('background-color', 'black');
        }, 500)
    });

    // Scoller à un endroit précis dans la page, 100vh
    $('#headerToMain').click(function(){
        $('html, body').animate({
            scrollTop: $('#main').offset().top
        }, 500 );
    })
    $('#toEnd').click(function(){
        $('html, body').animate({
            scrollTop: $('#end').offset().top
        }, 500 );
    })    
})
