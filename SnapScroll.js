$(document).ready(function(){
    var enfants = $('.textCutIcare')
    var scroll = $('#icareContent').scrollTop()
    var heightArray = []
    for (let i = 0; i < enfants.length; i++) {
        // Ajouter dans heightArray la valeur de scroll des enfants
        heightArray.push(enfants[i].scrollHeight)
    }
    console.log(heightArray)
    console.log(scroll)

})