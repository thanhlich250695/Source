$(document).ready(function(){
    $('.reason-item_name').click(function(){
        $(this).toggleClass('is-active')
        $(this).parent().find('.reason-item_content').toggleClass('is-active')
    })
    
})