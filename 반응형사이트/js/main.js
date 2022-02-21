
var swiper = new Swiper (".swiper", {
loop: true,
speed:1000, 
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
},
autoplay: {
delay: 3000,
disableOnInteraction: false,
},
grabCursor: true,
effect: "creative",
    creativeEffect: {
        prev: {
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});

$(function(){

$(window).scroll(function(){//스크롤 되면
$(".navbar").addClass('scroll');

if($(window).scrollTop() == 0){
$(".navbar").removeClass('scroll');
}
});
});

var du = 400;

$(".Album .info").on("mouseenter",function(){
$(this).find("strong, span").stop().animate({opacity:1},du);
})
.on("mouseleave",function(){
$(this).find("strong, span").stop().animate({opacity:""},du);
});

var swiper = new Swiper (".album", {
        effect: "flip",
        speed:1000, 
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
});