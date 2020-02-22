$(document).ready(function(){
    $('.reason-item_name').click(function(){
        $(this).toggleClass('is-active')
        $(this).parent().find('.reason-item_content').toggleClass('is-active')
    })
    
})

    $(".nav-1").click(function() {
        $(".b-nav-tab").removeClass("active");
        $(this).addClass("active");
        $('#tab1').addClass('active')
        $('#tab2').removeClass('active')
        $('#tab3').removeClass('active')
        $('#tab4').removeClass('active')
        $('#tab5').removeClass('active')
    });
 
    $(".nav-2").click(function() {
        $(".b-nav-tab").removeClass("active");
        $(this).addClass("active");
        $('#tab2').addClass('active')
        $('#tab1').removeClass('active')
        $('#tab3').removeClass('active')
        $('#tab4').removeClass('active')
        $('#tab5').removeClass('active')
    });
    $(".nav-3").click(function() {
        $(".b-nav-tab").removeClass("active");
        $(this).addClass("active");
        $('#tab3').addClass('active')
        $('#tab2').removeClass('active')
        $('#tab1').removeClass('active')
        $('#tab4').removeClass('active')
        $('#tab5').removeClass('active')
    });
    $(".nav-4").click(function() {
        $(".b-nav-tab").removeClass("active");
        $(this).addClass("active");
        $('#tab4').addClass('active')
        $('#tab2').removeClass('active')
        $('#tab3').removeClass('active')
        $('#tab1').removeClass('active')
        $('#tab5').removeClass('active')
    });
    $(".nav-5").click(function() {
        $(".b-nav-tab").removeClass("active");
        $(this).addClass("active");
        $('#tab5').addClass('active')
        $('#tab2').removeClass('active')
        $('#tab3').removeClass('active')
        $('#tab4').removeClass('active')
        $('#tab1').removeClass('active')
    });