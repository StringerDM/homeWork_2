const images = [
    'img/image1.jpg',
    'img/image2.jpg',
    'img/image3.jpg',
    'img/image4.jpg',
    'img/image5.jpg'
];
let currentIndex = 0;

function updateImage(index) {
    const imgElement = document.getElementById('current-img');
    const indexElement = document.getElementById('image-index');
    imgElement.src = images[index];
    imgElement.alt = `Слайд ${index + 1}`;
    indexElement.textContent = `Изображение ${index + 1} из ${images.length}`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

updateImage(0);
