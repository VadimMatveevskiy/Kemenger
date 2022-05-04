$(function(){
    $('.top-content__popup').on('click', function(){
        $('.top-popup').addClass('top-popup--active');
    });
    $('.top-popup__btn').on('click', function(){
        $('.top-popupok').addClass('top-popupok--active');
        $('.top-popup').removeClass('top-popup--active');
    });

    $('.comment__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="28" height="64" viewBox="0 0 28 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 2L3.99903 29.5012C2.83033 30.9621 2.83032 33.0379 3.99902 34.4988L26 62" stroke-width="5"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="28" height="64" viewBox="0 0 28 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L24.001 29.5012C25.1697 30.9621 25.1697 33.0379 24.001 34.4988L2 62" stroke-width="5"/></svg></button>',
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
    });  

    $('.catalog__item-more').on('click', function(){
        $(this).closest('.catalog__item').addClass('catalog__item--active');
    })
    $(document).on('mouseup', function(){
        $('.catalog__item').removeClass('catalog__item--active');
        // $('.top-popup').removeClass('top-popup--active');
        $('.top-popupok').removeClass('top-popupok--active');
    })

    $('.catalog__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="28" height="64" viewBox="0 0 28 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 2L3.99903 29.5012C2.83033 30.9621 2.83032 33.0379 3.99902 34.4988L26 62" stroke-width="5"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="28" height="64" viewBox="0 0 28 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L24.001 29.5012C25.1697 30.9621 25.1697 33.0379 24.001 34.4988L2 62" stroke-width="5"/></svg></button>',
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
    });  
  
})