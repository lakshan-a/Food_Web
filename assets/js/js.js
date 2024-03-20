let list = document.querySelectorAll('.carousel .list .item');
let carousel = document.querySelector('.carousel');
let dots = document.querySelectorAll('.dots li');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let lastPosition = list.length - 1;
let active = 0;
let zIndex = 2;

nextBtn.onclick = () => {
    let newValue = active + 1 > lastPosition ? 0 : active + 1;
    setItemActive(newValue, showSlider);
}
prevBtn.onclick = () => {
    let newValue = active - 1 < 0 ? lastPosition : active - 1;
    setItemActive(newValue, showSlider);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        setItemActive(index, showSlider);
    })
})

const setItemActive = (newValue, callbackFunction) => {
    if(newValue === active) return;
    let type = newValue > active ? 'next' : 'prev';
    active = newValue;
    callbackFunction(type);
}
let removeEffect;
let autoRun = setTimeout(() => {
    nextBtn.click();
}, 5000);












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