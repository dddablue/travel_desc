$(document).ready(function(){

    //메인 메뉴 - 롤오버시 서브메뉴 슬라이드다운
    $(".dp1").mouseenter(function(){
        $(".sub").stop().slideDown();
    });
    $("header").mouseleave(function(){
        $(".sub").stop().slideUp();
    });

});

var swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});