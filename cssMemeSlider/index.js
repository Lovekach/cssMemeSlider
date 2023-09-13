const IMAGE = document.querySelectorAll('.image'),
DOTS = document.querySelectorAll('.dots'),
IMAGE_WRAPPER = document.querySelector('.image-wrapper'),
STEP = document.querySelectorAll('.step'),
STEPS_WRAPPER = document.querySelector('.steps-wrapper');

let currentIndex = 0;
let stepIndex = 0;

function showImage(index) {
    IMAGE.forEach((image) => (image.style.opacity = 0));
    DOTS.forEach((dot) => dot.classList.remove('active'));
    STEP.forEach((step) => step.classList.remove('active'));

    IMAGE[index].style.opacity = 1;
    DOTS[index].classList.add('active');
    STEP[index].classList.add('active');

    setTimeout(() => {
        STEP[index].classList.add('active');
    }, 0);
    IMAGE_WRAPPER.style.transform = `translateX(-${index * 100}%)`;
   
}

DOTS.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        stepIndex = index;
        showImage(currentIndex);
        showImage(stepIndex);
    });
});

showImage(currentIndex);
showImage(stepIndex);


