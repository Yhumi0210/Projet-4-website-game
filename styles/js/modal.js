// Fonction du menu burger en responsive
function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
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

// Ajouter un écouteur d'événement au click
closeModalBg.addEventListener("click", () => {
  // Fermez la modale en changeant son style display à 'none'
  modalbg.style.display = "none"
})

// Deuxième étape : récupérer les input getElementById
// ajouter des écouteurs click, change, input(réagit dès qu'on tape quelquechose),
// submit(sans recharger la page)
// récupérer les valeurs de ce qu'on tape dans les champs console.log(   .value)
// pour y ajouter des vérifications

let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  // Récupérer, écouter et vérifier l'entrée du Prénom
  let baliseFirstName = document.getElementById("first")
  let first = baliseFirstName.value
  function validName(name) {
    return name.length >= 2
  }
  if (validName(first)) {
    document.getElementById("firstNameError").innerText = "" // Efface le message d'erreur s'il y en a un
    console.log("Le prénom est valide.")
    baliseFirstName.classList.remove("error")
  } else {
    // Affiche un message d'erreur dans la div portant l'id "firstNameError"
    document.getElementById("firstNameError").innerText = "Veuillez saisir au moins 2 caractères."
    console.error("Veuillez saisir au moins 2 caractères.")
    // Ajoute la classe error
    baliseFirstName.classList.add("error")
  }

// Récupérer, écouter et vérifier l'entrée du Nom
  let baliseLastName = document.getElementById("last")
  let last = baliseLastName.value

  if (validName(last)) {
    document.getElementById("lastNameError").innerText = "" // Efface le message d'erreur s'il y en a un
    console.log("Le nom est valide.")
    baliseLastName.classList.remove("error")
  } else {
    // Affiche un message d'erreur dans la div portant l'id "lastNameError"
    document.getElementById("lastNameError").innerText = "Veuillez saisir au moins 2 caractères."
    console.error("Veuillez saisir au moins 2 caractères.")
    // Ajoute la classe error
    baliseLastName.classList.add("error")
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
  if (validEmail(email)) {
    document.getElementById("mailError").innerText = "" // Efface le message d'erreur s'il y en a un
    console.log("L'e-mail est valide.")
    baliseEmail.classList.remove("error")
  } else {
    // Affiche un message d'erreur dans la div portant l'id "mailError"
    document.getElementById("mailError").innerText = "L'adresse e-mail est invalide."
    console.error("L'adresse e-mail est invalide.")
    // Ajoute la classe error
    baliseEmail.classList.add("error")
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
      document.getElementById("birthError").innerText = "" // Efface le message d'erreur s'il y en a un
      console.log("La date de naissance est valide.")
      baliseBirthdate.classList.remove("error")
    } else {
    // Affiche un message d'erreur dans la div portant l'id "birthError"
      document.getElementById("birthError").innerText = "La date de naissance est invalide."
      console.error("La date de naissance est invalide.")
    // Ajoute la classe error
    baliseBirthdate.classList.add("error")
    }

  // Récupérer, écouter et vérifier l'entrée du nombre de participation
  let baliseNumberParticipation = document.getElementById("quantity")
  let quantity = baliseNumberParticipation.value
  function validNumberParticipation(quantity) {
    let numberRegExp = new RegExp("[0-9]+")
    if (numberRegExp.test(quantity)) {
      return true
    }
    return false
  }
  if (validNumberParticipation(quantity)) {
    document.getElementById("numberError").innerText = "" // Efface le message d'erreur s'il y en a un
    console.log("Le nombre de participation est valide.")
    baliseNumberParticipation.classList.remove("error")
  } else {
    // Affiche un message d'erreur dans la div portant l'id "numberError"
    document.getElementById("numberError").innerText = "Veuillez saisir au moins un nombre."
    console.error("Veuillez saisir au moins un nombre.")
    // Ajoute la classe error
    baliseNumberParticipation.classList.add("error")
  }

  // Troisième étape : vérifier si un des boutons radio est coché et si oui lequel

  let listBtnRadio = document.querySelectorAll(".formData input[type=radio]")

  // Converti la collection NodeList en un tableau
  let listBtnRadioArray = Array.from(listBtnRadio)

  // Initialise une variable pour savoir si un bouton radio est coché
  let isRadioButtonChecked = false

  for (let index = 0; index < listBtnRadioArray.length; index++) {
    if (listBtnRadioArray[index].checked) {
      // Affiche le choix sélectionné
      document.getElementById("cityError").innerText = "" // Efface le message d'erreur si nécessaire
      console.log("Ville souhaitée : ", listBtnRadioArray[index].value)
      listBtnRadioArray[index].classList.remove("error-checkbox")
      isRadioButtonChecked = true
      break
    }
  }

  // Afficher un message d'erreur si aucun bouton radio n'est coché
  if (!isRadioButtonChecked) {
    // Affiche un message d'erreur dans la div portant l'id "cityError"
    document.getElementById("cityError").innerText = "Veuillez sélectionner une ville."
    console.error("Veuillez sélectionner une ville.")

    for (let index = 0; index < listBtnRadioArray.length; index++) {
      // Supprime la classe checkbox-label
      listBtnRadioArray[index].classList.remove("checkbox-label")

      // Ajoute la classe error-checkbox
      listBtnRadioArray[index].classList.add("error-checkbox")
    }
  }

  // Quatrième étape : vérifier si les checks sont cochés ou non.

  // Récupérer la checkbox "Conditions d'utilisation" est cochée
  let checkboxConditions = document.getElementById("checkbox1")

// Vérifier si la checkbox "Conditions d'utilisation" est cochée
  let isCheckboxConditionsChecked = checkboxConditions.checked

  if (isCheckboxConditionsChecked) {
    document.getElementById("checkbox1Error").innerText = ""
  } else {
    // Affiche un message d'erreur dans la div portant l'id "checkbox1Error"
    document.getElementById("checkbox1Error").innerText = "Veuillez accepter les conditions d'utilisation."
  }

  // Dernière étape : Vérification du formulaire et affichage de la fenêtre de remerciement
  // Affichage de la fênetre de confirmation du formulaire

  // Vérifie si tous les champs sont valides
      if (
        validName(first)
        && validName(last)
        && validEmail(email)
        && isDateValid(birthdateValue)
        && validNumberParticipation(quantity)
        && isRadioButtonChecked
        && isCheckboxConditionsChecked
      ) {
        console.log("Prénom : ", baliseFirstName.value)
        console.log("Nom : ", baliseLastName.value)
        console.log("Email : ", baliseEmail.value)
        console.log("Date de naissance : ", baliseBirthdate.value)
        console.log("Nombre de participation : ", baliseNumberParticipation.value)
        console.log("Les conditions générales d'utilisation sont acceptés.")

        form.reset()
        form.style.display = "none"

        let messageThanks = document.querySelector(".thanks")
        messageThanks.style.display = "flex"

        document.querySelector(".thanks button")
            .addEventListener("click", () => {
              modalbg.style.display = "none"
              form.style.display = "block"
              messageThanks.style.display = "none"
            })
      } else {
        console.log("Certains champs ne sont pas valides")
      }
      })

