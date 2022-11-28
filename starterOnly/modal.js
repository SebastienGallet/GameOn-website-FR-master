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
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Selection de la croix de fermeture du popup
const closeModal = document.querySelector(".close");
//Fonction pour fermer le popup
closeModal.addEventListener('click', function() {
  modalbg.style.display = "none";
});


//-----------------------------------------------------
//  Vérification
//-----------------------------------------------------

const form = document.querySelector('form');
const sendButton = document.querySelector('.btn-submit');
const firstName = document.querySelector('#first');
const firstNameError = document.querySelector('#firstNameError');
const lastName = document.querySelector('#last');
const lastNameError = document.querySelector('#nameError');
const textControl = document.querySelector('.text-control');
const mail = document.querySelector('#email');
const mailError = document.querySelector('#mailError');
const birthDate = document.querySelector('#birthDate');
const dateError = document.querySelector('#dateError');
const tournamentQuantity = document.querySelector('#quantity');
const tournamentError = document.querySelector('#tournamentError');
const localisationChoice = document.querySelector('#checkbox-input');
const localisationError = document.querySelector("#localisationError");
const thanks = document.querySelector(".thanks");
let valid = false;



const regexName = /^[a-zA-ZéèîïÉÊÈÍÎÌÏ][a-zéèêëçïî]+([-'\s][a-zA-ZéèîïÉÊÈÍÎÌÏ][a-zéèêëçïî]+)?/;
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

// Vérification des valeurs
document.querySelector('.text-control').addEventListener('input', isFormValid);

function isFormValid(){
  validationFirstname();
}


// Validation globale
function formValid(e) {
  e.preventDefault();
  validationFirstname();
  validationName();
  validationMail();
  validationBirth();
  validationTournament();
  validationLocalisation();

  if (valid = true) {
    thanks.style.display = "block";
    form.style.display = "none"
    sendButton.style.opacity = "100%"
    sendButton.style.cursor = 'pointer'
  } else {
    thanks.style.display = "none";
    form.style.display = "block"
  }
}

// Prénom
function validationFirstname() {
  if (firstName.value.length < 2) {
    //retirer les espaces
    firstName.parentElement.setAttribute("data-error-visible", "true");
  } else {
    firstName.parentElement.setAttribute("data-error-visible", "false");
  }
};

//Nom
function validationName() {
  if (lastName === "" || lastName.lenght < 2) {
    lastNameError.style.display = "block";
    lastNameError.style.border = "1px solid red";
    valid = false;
    console.log('erreur last')
  } else {
    lastNameError.style.display= "none";
    valid = true
  }
};

//Email
function validationMail() {
  if (mail.value.match(regexMail)) {
    mailError.style.display = "none";
    valid = true
  } else {
    mailError.style.display= "block";
    valid = false
  }
}

//Date de naissance
function validationBirth() {
  if (birthDate.value.match(regexDate)) {
    dateError.style.display = "none";
    valid = true
  } else {
    dateError.style.display= "block";
    valid = false
    console.log('erreur date')
  }
}

//Nombre de participations
function validationTournament() {
  if (tournamentQuantity.value >= 0 && tournamentQuantity.value < 100) {
    tournamentError.style.display = "block";
    valid = true;
  } else {
    tournamentError.style.display = "none";
    valid = false
    console.log('erreur nbr tournois')
  }
}

// Choix d'un lieu
function validationLocalisation() {
  let check = false;
  for (let i = 0; i < localisationChoice.length; i++) {
    if (localisationChoice[i].checked) {
      check = true;
      break;
    }
  }

  if (check) {
    localisationError.style.display = "none";
    valid = true;
  } else {
    localisationError.style.display = "block"
    valid = false
    console.log('erreur localisation')
  }
};





// const thanks = document.querySelector(".thanks");
// const sendButton = document.querySelector(".btn-submit");
// const formModal = document.querySelector(".reserve")

// sendButton.addEventListener('click', function() {
//   formModal.style.display = "none";
//   thanks.style.display = "block";
// })


