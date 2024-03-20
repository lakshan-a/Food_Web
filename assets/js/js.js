let list = document.querySelectorAll('.carousel .list .item');
let carousel = document.querySelector('.carousel');
let dots = document.querySelectorAll('.dots li');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let lastPosition = list.length - 1;
let active = 0;
let zIndex = 2;













(function ($) {
    "use strict";

    $('.popup-youtube, .popup-vimeo').magnificPopup({
        // disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

}(jQuery));