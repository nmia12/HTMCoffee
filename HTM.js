const slides = document.querySelectorAll('.htm1 img');

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}
let currentIndex = 0; 
function next() {
    currentIndex = currentIndex + 1;

    if (currentIndex > slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

function pre() {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
}

