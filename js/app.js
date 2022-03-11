//Anima o menu em mobile 
$('#menu_hamburguer').on('click', () => {
    if ($('#menu').css('left') < '0') {
        $('#menu').css('left', '0')
    } else {
        $('#menu').css('left', '-110%')
    }
})