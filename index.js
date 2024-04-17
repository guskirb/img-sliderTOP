const imageBackground = document.querySelector('.imgContainer');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

const slideshow = ['img/img0.jpeg', 'img/img1.jpeg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg']

let num = 0;

prevArrow.addEventListener("click", prevSlide);
nextArrow.addEventListener("click", nextSlide);

function changeSlide() {
    setImage(num)
    if (num < slideshow.length - 1) {
        num++;
    } else {
        num = 0;
    }

    setTimeout("changeSlide()", 5000);
}

function setImage(value) {
    imageBackground.style.backgroundImage = `url(${slideshow[value]})`;
    document.querySelector('.active')?.classList.remove('active');
    document.getElementById(`img${value}`).classList.add('active');
}

function nextSlide() {
    if (num < slideshow.length - 1) {
        num++;
    } else {
        num = 0;
    }

    setImage(num)
}

function prevSlide() {
    if (num > 0) {
        num--;
    } else {
        num = 4;
    }

    setImage(num)
}

window.onload = changeSlide;