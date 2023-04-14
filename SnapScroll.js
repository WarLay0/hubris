$(document).ready(function(){
    $('#FooterPanel').css('display', 'none');
    var icareEtat = 0;
    var midasEtat = 0;
    var narcisseEtat = 0;
    var nbDiv = $('.textCutIcare').length;
    var vh = $('.textCutIcare').height();
    var total = nbDiv * vh;
    function condition(){
        if(icareEtat == 1 && midasEtat == 1 && narcisseEtat == 1){
            $('#FooterPanel').css('display', 'block');
        }else{
            $('#FooterPanel').css('display', 'none');
        }
    }
    $('#icareContent').scroll(function(){
        var scroll = $('#icareContent').scrollTop();
        // console.log(icareEtat);
        // console.log(scroll + ' ' + total);
        if(scroll > total-vh){
            icareEtat = 1;
        }
        condition();
    })
    $('#ContentMidas').scroll(function(){
        var scroll = $('#ContentMidas').scrollTop();
        // console.log(icareEtat);
        // console.log(scroll + ' ' + total);
        if(scroll > total-vh){
            midasEtat = 1;
        }
        condition();
    })
    $('#ContentNarcisse').scroll(function(){
        var scroll = $('#ContentNarcisse').scrollTop();
        // console.log(icareEtat);
        // console.log(scroll + ' ' + total);
        if(scroll > total-vh){
            narcisseEtat = 1;
        }
        condition();
    })
})