;
$(function(){
    $('#main-menu').find('.menu').find('> li').hover(function(){
        $(this).find('ul')
        .removeClass('menu')
        .stop(true, true).slideToggle('fast');
    });
});;
