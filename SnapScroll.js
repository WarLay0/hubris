$(document).ready(function(){
    var enfants = $('.textCutIcare')
    var heightArray = []
    for (let i = 0; i < enfants.length; i++) {
        // Ajouter dans heightArray la valeur de scroll des enfants
        heightArray.push(enfants[i].scrollHeight*i)
        console.log(heightArray)
        
        
    }
    $('#icareContent').scroll(function(){
        var scroll = $('#icareContent').scrollTop()
        console.log(scroll)
        if (scroll > heightArray[1]/4) {
            $('#icareContent').animate({
                scrollTop: heightArray[1]
            }, 500)
        }
    })
})