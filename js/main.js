$(document).ready(function(){
    // swiper slider banner
    var sliderBanner = function(){
        var mySwiper = new Swiper ('.swiper-banner', {
            slidesPerView:'1.5',
            autoplay: {
                delay: 2000,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
    sliderBanner();

    var sliderDetailProduct = function(){
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 4,
			loop: false,
			freeMode: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		  });
		var galleryTop = new Swiper('.gallery-top', {
            slidesPerView:1,
			spaceBetween: 10,
			loop:false,
			loopedSlides: false, 
			thumbs: {
				swiper: galleryThumbs,
			},
		});
    }
    sliderDetailProduct();
    // wow js
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
});