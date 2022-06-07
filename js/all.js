$(document).ready(function(){
    $(".ques-list_item").on('click',function(){
       $(this).siblings().removeClass('active');
       $(this).toggleClass('active');
    });
    $(".sui-btn").on("click", function(e){
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        let txt = $(this).text();
        let len = txt.length;
       console.log(txt.substring(0, len - 1));
       $('.user-txt p').html(`${txt.substring(0, len - 1)}<sub>位</sub>`);

    })
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  });