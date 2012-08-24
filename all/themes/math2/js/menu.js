$(function(){
    $('#block-system-main-menu').find('ul').find('li').hover(function(){
        $(this).find('ul')
        .removeClass('menu')
        .stop(true, true).slideToggle('fast');
    });
});