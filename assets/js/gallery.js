// Din cool code here
const animalsArray = [
  "Dog.jpg",
  "elephant.jpg",
  "great-white.jpg",
  "koala.jpg",
  "tiger.jpg",
];

const baseUrl = "./assets/img/";

const app = document.getElementById("app");

const gallery = document.createElement("article");
gallery.classList.add("animals-gallery");
app.appendChild(gallery);

const createImageGallery = () => {
  animalsArray.forEach((img) => {
    const galleryFigure = document.createElement("figure");
    galleryFigure.classList.add("gallery-figure");
    const galleryImage = document.createElement("img");
    const galleryImageSrc = baseUrl + img;
    galleryImage.src = galleryImageSrc;

    gallery.appendChild(galleryFigure);
    galleryFigure.appendChild(galleryImage);
  });
};

createImageGallery();
