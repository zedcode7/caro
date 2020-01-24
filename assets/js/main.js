$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 5,
    loop: false,
    margin: 0,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,

   
    responsive:{
      0:{
          items:1
      },
      500:{
          items:3
      },
      1000:{
          items:6
      }
  }

})
});
