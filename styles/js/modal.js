function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
console.log(modalBtn)
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//forEach sert à boucler dans un tableau, boucle infinie qu'on ne peut pas arrêter

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// commencer par fermer la popup
// en utilisant un display none
// function launchModal() {
//   modalbg.style.display = "none";
// } au click de l'icone croix
// et dire à ma function d'écouter au click


// deuxième étape
// récupérer les input getElementById
// ajouter des écouteurs click, change, input(réagis dès qu'on tape quelquechose),
// submit(sans recharger la page)
// récupérer les valeurs de ce qu'on tape dans les champs console.log(   .value)
// pour y ajouter des vérifications



