// slider === slider
// slider_line === container-images
// slider_wrapper === dots-group

// const CONTAINER_IMG = document.querySelector('container-images'),
// DOTS = document.querySelectorAll('dots'),
// IMAGE = document.querySelectorAll('image');

// let currentIndex = 0;

// DOTS.addEventListener('click', function () {
//     currentIndex = (currentIndex - 1 + DOTS.length) % DOTS.length;
//     nextSlide();
// });

// function nextSlide() {
//     CONTAINER_IMG.style.transform = `translateX(-${currentIndex * 934}px)`;

//     DOTS.forEach((dot, index) => {
//         if (index === currentIndex) {
//             dot.classList.toggle('active');
//         } else {
//             dot.classList.remove('active');
//         }
//     });
// }



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
