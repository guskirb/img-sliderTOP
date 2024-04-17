const imageBackground = document.querySelector('.imgContainer');

const slideshow = ['img/img0.jpeg', 'img/img1.jpeg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg']

function setImage(value) {
    imageBackground.style.backgroundImage = `url(${slideshow[value]})`;
    if (document.getElementsByClassName("active").length === 0) {
        document.getElementById(`img${value}`).classList.add('active');
    } else {
        document.querySelector('.active').classList.remove('active');
        document.getElementById(`img${value}`).classList.add('active');
    }
}

