$(document).ready(function(){
    const domTab = function(){
        $('.list-item li').click(function(){
            $('.list-item li').removeClass('is-active');
            $(this).addClass('is-active')
        });
    }
    domTab();
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: '1.5',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : false,
        },
      });
});