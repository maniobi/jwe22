$('#burger_nav').click(function(e) {
    e.preventDefault();


    let menu = $('#main_nav');

    if(menu.hasClass('active') == false) {
        menu.slideDown();
        menu.addClass('active');
    } else {
        menu.slideUp();
        menu.removeClass('active');
    }

    return false;
});

$('#main_nav .close').click(function(){
    $('#main_nav').slideUp();
    $('#main_nav').removeClass('active');
});


