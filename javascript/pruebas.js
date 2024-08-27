let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100; 
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlides(slideIndex + step);
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 5000);
}

window.onload = function() {
    autoSlide();
};