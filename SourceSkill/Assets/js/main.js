$(document).ready(function(){
    const domTab = function(){
        $('.list-item li').click(function(){
            $('.list-item li').removeClass('is-active');
            $(this).addClass('is-active')
        });
    }
    domTab();
});