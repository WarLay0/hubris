 $(document).ready(function(){

    // Disparition des images au survol des liens
 //   $('#icare').hover(function(){
 //       //animation dans le css
 //       setTimeout(()=>{
 //           $('#bgIcare').css('display', 'none');
   //     }, 000)

  //  }, function(){
   //     $('#bgIcare').css('display', 'block');
   // });

//     $('#narcisse').hover(function(){
//         $('.narcisseName').css('left', '53vw');
//         $('.narcisseName').css('opacity', '0');

//         $('.narcisseImage').css('left', '100vw');
//         $('.narcisseImage').css('opacity', '0');

//         $('#bgNarcisse').css('opacity', '0');

//         setTimeout(()=>{
//             $('#bgNarcisse').css('display', 'none');
//             $('.content').css('opacity', '1');
//         }, 1000)
//     }, function(){

//         $('#bgNarcisse').css('display', 'block');
//         $('#bgNarcisse').css('opacity', '1');
//         $('#bgNarcisse').css('background-color', 'transparent');

//         $('.narcisseImage').css('left', '100vw');

//         setTimeout(()=>{
//             $('.narcisseImage').css('left', '75vw');
//             $('.narcisseImage').css('opacity', '1');

//             $('.narcisseName').css('left', '58vw');
//             $('.narcisseName').css('opacity', '1');
//         }, 200)
//         setTimeout(()=>{
//             $('#bgNarcisse').css('background-color', 'black');
//         }, 500)

//         if($('#bgNarcisse').css('display', 'none')){
//             $('#bgNarcisse').css('display', 'block');
//             setTimeout(()=>{
//                 $('#bgNarcisse').css('display', 'block');
//             }, 1000)
//         }
//     });

    

//     $('#midas').hover(function(){
//         $('#bgMidas').css('display', 'none');
//     }, function(){
//         $('#bgMidas').css('display', 'block');
//     });

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
 
 
 
 


//  if( l1.scrollHeight- l1.scrollTop- l1.clientHeight< 1){
//    console.log("t'est en bas batar 1")