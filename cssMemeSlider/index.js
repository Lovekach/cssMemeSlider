const IMAGE = document.querySelectorAll('.image'),
DOTS = document.querySelectorAll('.dots'),
IMAGE_WRAPPER = document.querySelector('.image-wrapper');

let currentIndex = 0;

function showImage(index) {
    IMAGE.forEach((image) => (image.style.opacity = 0));
    DOTS.forEach((dot) => dot.classList.remove('active'));

    IMAGE[index].style.opacity = 1;
    DOTS[index].classList.add('active');

    IMAGE_WRAPPER.style.transform = `translateX(-${index * 954}px)`;
}

DOTS.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

showImage(currentIndex);
