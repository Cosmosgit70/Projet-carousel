// majout - modification chemin des images 
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Étape 2 : Ajoutez des Event Listeners sur les flèches 
// let arrowRight = document.querySelector(".arrow_right");
// 	arrowRight.addEventListener("click", function () {
// 	console.log("click sur la flèche droite")
// });

// let arrowLeft = document.querySelector(".arrow_left");
// 	arrowLeft.addEventListener("click", function () {
// 	console.log("click sur la lfèche gauche")
// });
// Fin de l'Étape 2 


// const slide = ["slide1.jpg","slide2.jpg","slide3.jpg","slide4.png"]
// let numero = 0;

// function changeSlide(sens) {
// 	numero = numero + sens;
// 	if (numero > slide.length -1)
// 		numero = 0;
// 	if (numero < 0)
// 		numero = slide.length -1;
// 	document.querySelector(".banner-img").src="./assets/images/slideshow/" + slide[numero];
// }

// diaporama change slide auto toute les 4 secondes 
// setInterval("changeSlide(1)" , 4000);




// le projet complet
// Afficher les dots
const dots = document.querySelector(".dots");
let index = 0
function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot)
		if (i === index) {
			dot.classList.add("dot_selected");
		}
	}
}

displayDots()

// Affichage des slides dans les 2 sens 
const arrowRight = document.querySelector(".arrow_right");
const img = document.querySelector(".banner-img")
const tagLine = document.querySelector("#banner p")

function clickRight() {
	arrowRight.addEventListener("click", ()=> {
	const arrayDots = document.querySelectorAll(".dots .dot");
	arrayDots[index].classList.remove("dot_selected");
	index++;
	if (index > slides.length -1) {
		index = 0
	}
	arrayDots[index].classList.add("dot_selected")
	img.src = slides[index].image;
	tagLine.innerHTML = slides[index].tagLine;
	})
}
clickRight();

const arrowLeft = document.querySelector(".arrow_left");
function clickLeft() {
	arrowLeft.addEventListener("click", ()=> {
	const arrayDots = document.querySelectorAll(".dots .dot");
	arrayDots[index].classList.remove("dot_selected");
	index--;
	if (index < 0 ) {
		index = slides.length -1
	}
	arrayDots[index].classList.add("dot_selected")
	img.src = slides[index].image;
	tagLine.textContent = slides[index].tagLine;
	})
}
clickLeft();

