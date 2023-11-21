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
const modalBtn = document.querySelectorAll(".modal-btn")
console.log(modalBtn)
const formData = document.querySelectorAll(".formData")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
//forEach sert à boucler dans un tableau, boucle infinie qu'on ne peut pas arrêter

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// Première étape : commencer par fermer la popup en utilisant un display none
// et dire à ma function d'écouter au click

// Sélectionner le bouton de fermeture
const closeModalBg = document.querySelector(".close")

// Sélectionner la modale
// const modalbg = document.querySelector(".bground")
// Ajouter un écouteur d'événement au click
closeModalBg.addEventListener("click", () => {
  // Fermez la modale en changeant son style display à 'none'
  modalbg.style.display = "none"
})

// Deuxième étape : récupérer les input getElementById
// ajouter des écouteurs click, change, input(réagis dès qu'on tape quelquechose),
// submit(sans recharger la page)
// récupérer les valeurs de ce qu'on tape dans les champs console.log(   .value)
// pour y ajouter des vérifications

let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  // Récupérer, écouter et vérifier l'entrée du Prénom
  let baliseFirstName = document.getElementById("first")
  let first = baliseFirstName.value
  function validFirstName(first) {
    if (first.length >= 2) {
      return true
    }
    return false
  }

// Récupérer, écouter et vérifier l'entrée du Nom
  let baliseLastName = document.getElementById("last")
  let last = baliseLastName.value
  function validLastName(last) {
    if (last.length >= 2) {
      return true
    }
    return false
  }

  // Récupérer, écouter et vérifier l'entrée de l'Email
  let baliseEmail = document.getElementById("email")
  let email = baliseEmail.value
  function validEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (emailRegExp.test(email)) {
      return true
    }
    return false
  }

  // Récupérer, écouter et vérifier l'entrée de la date de naissance
  function isDateValid(dateString) {
    // Vérifier si dateString est une chaîne de caractères
    if (typeof dateString !== 'string') {
      return false
    }

    // Vérifier si la chaîne de date n'est pas vide
    if (dateString.trim() === '') {
      return false
    }

    // Créer une instance de Date en utilisant la chaîne fournie
    let date = new Date(dateString)

    // Vérifier si la date est valide (et que la chaîne n'était pas invalide)
    return !isNaN(date.getTime())
  }

  let baliseBirthdate = document.getElementById("birthdate")
  let birthdateValue = baliseBirthdate.value

  if (isDateValid(birthdateValue)) {
    console.log('La date de naissance est valide.')
  } else {
    console.log('Veuillez entrer une date de naissance valide.')
  }

  // Récupérer, écouter et vérifier l'entrée du nombre de participation
  let baliseNumberParticipation = document.getElementById("quantity")
  let quantity = baliseNumberParticipation.value
  function validNumberParticipation(quantity) {
    if (quantity.length >= 2) {
      return true
    }
    return false
  }
})

// Troisième étape : vérifier si un des boutons radio est coché et si oui lequel

let listBtnRadio = document.querySelectorAll(".formData input[type=radio]")
for (let index = 0; index < listBtnRadio.length; index++) {
  listBtnRadio[index].addEventListener("change", (event) => {
//    console.log(event.target.value)
    let selectedLocation = document.querySelector(".formData input[type=radio]:checked")

    if (selectedLocation) {
      // Afficher le choix sélectionné
      console.log("Ville sélectionnée : ", selectedLocation.value)
    } else {
      // Afficher un message d'erreur si aucun bouton radio n'est coché
      console.log("Veuillez sélectionner une ville.")
    }
  })
}

