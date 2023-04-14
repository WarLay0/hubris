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

//     // Scoller à un endroit précis dans la page, 100vh
     $('#headerToMain').click(function(){
        $('html, body').animate({
             scrollTop: $('#main').offset().top
         }, 500 );        
     })
 })


const l1 = document.querySelector('#icareContent')
const l2 = document.querySelector('#ContentMidas')
const l3 = document.querySelector('#ContentNarcisse')
const Mo = document.querySelector('#End')
let c1 = 0
let c2 = 0
let c3 = 0
const BDody = document.querySelector('body')
const main = document.querySelector('#main')

console.log(l1.scrollHeight)

 

l1.addEventListener('scroll', (event) => {
 
        console.log(l1.scrollTop, "distance du top");
         if (l1.scrollHeight- l1.scrollTop- l1.clientHeight< 1 ){
            c1++
            console.log("End", c1);
            if(c1 && c2 && c3 > 0){
                console.log("les trois sont valide")
                Mo.classList.remove('hidden')

            }

        }

});

l2.addEventListener('scroll', (event) => {
 
 
    if (l2.scrollHeight- l2.scrollTop- l2.clientHeight< 1){
        c2++
        console.log("End", c2);
        if(c1 && c2 && c3 > 0){
            console.log("les trois son valide")
            Mo.classList.remove('hidden')

        }

   }

}); 



function moraleFunction(){
    main.animate({
       scrollTop: 600
     }, 500 );
 }


l3.addEventListener('scroll', (event) => {
 
 
    if (l3.scrollHeight- l3.scrollTop- l3.clientHeight< 1){
        c3++
        console.log("End", c3);
        if(c1 && c2 && c3 > 0){
            console.log("les trois sont valide")
            Mo.classList.remove('hidden')


        }

   }

});




console.log(BDody.scrollHeight-BDody.offsetHeight, " taille totale de scroll - taille de l'écran (banderolle - écran)");
console.log(BDody.offsetHeight, "  offsetheight");
console.log(BDody.scrollHeight, "  scrollheight");