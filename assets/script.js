const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0;
let chemin = "./assets/images/slideshow/";
let bannerImg = document.querySelector(".banner-img");
let tagLine = document.querySelector("#banner p");
let flecheD = document.querySelector(".arrow_right");
let flecheG = document.querySelector(".arrow_left");

function afficherSlide(tableau, position) {
bannerImg.src = chemin + tableau[position].image;
tagLine.innerHTML = tableau[position].tagLine;
updateDots(position);
 }
afficherSlide(slides, position);

flecheD.addEventListener("click", function () {
    position++;
if (position > 3) {
    afficherSlide(slides, 0);
    position=0;
} else{
    afficherSlide(slides, position);
}
});

flecheG.addEventListener("click", function () {
    console.log("flèche gauche cliquée");
    position--;
if (position < 0) {
    afficherSlide(slides, 3);
    position=3;
} else {
    afficherSlide(slides, position);
}
});
const dotsContainer = document.querySelector('#banner .dots');

slides.forEach((slide, index) => {
const dot = document.createElement("div");
dot.classList.add('dot');
if (index === 0) {
	dot.classList.add('dot_selected')
}

// Ajouter un eventListener pour rendre chaque dot cliquable
dot.addEventListener('click', () => {
	position = index;  // Met à jour la position selon le dot cliqué
	afficherSlide(slides, position);  // Affiche le slide correspondant
});

dotsContainer.appendChild(dot);
})
// Fonction pour mettre à jour les dots
function updateDots(position) {
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === position) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}