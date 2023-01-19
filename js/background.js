const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg"
];

// random image within the length of the images array
const chosenImage = images[Math.floor(Math.random() * images.length)];

// add image into the html
const bgImage = document.createElement("img");
// set src as a random image
bgImage.src = `img/${chosenImage}`;

const imgCont = document.createElement("div");

imgCont.classList.add("imgCont");


imgCont.appendChild(bgImage);
document.body.prepend(imgCont);