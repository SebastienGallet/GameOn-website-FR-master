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
const form = document.querySelector('form');
const sendButton = document.querySelector('.btn-submit');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const mail = document.querySelector('#email');
const birthDate = document.querySelector('#birthdate');
const tournamentQuantity = document.querySelector('#quantity');
const localisationChoice = document.querySelector('.checkbox-input');
const thanks = document.querySelector(".thanks");
const regexName = /^[a-zA-ZéèîïÉÊÈÍÎÌÏ][a-zéèêëçïî]+([-'\s][a-zA-ZéèîïÉÊÈÍÎÌÏ][a-zéèêëçïî]+)?/;
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const closeModal = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fonction pour fermer le popup
closeModal.addEventListener('click', function() {
  modalbg.style.display = "none";
});



//-----------------------------------------------------
//  Vérification
//-----------------------------------------------------

function validate(){
  if (
    checkFirstName() &&
    checkLastName() &&
    checkMail() &&
    checkBirth() &&
    checkTournament() === true
   // checkLocalisation()
    ) {
    showSendButton();
    return true;
  }
  return false
}

document.querySelector('.text-control').addEventListener('input', showSendButton)
function showSendButton() {
  sendButton.style.opacity = "1";
  sendButton.style.cursor= "pointer"
}

sendButton.addEventListener('click', function(e) {
  e.preventDefault();
  if(validate() === true) {
    showValidationMessage()
  }
})

function showValidationMessage() {
  form.style.display = "none";
  thanks.style.display = "block"
}

// Prénom
firstName.addEventListener('input', checkFirstName)
function checkFirstName() {
  //retirer les espace
  if (firstName.value.length < 2) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    return false
  } else {
    firstName.parentElement.setAttribute("data-error-visible", "false");
    return true
  }
};

//Nom
lastName.addEventListener('input', checkLastName)
function checkLastName() {
  if (lastName.value.length < 2) {
    lastName.parentElement.setAttribute("data-error-visible", "true");
    return false
  } else {
    lastName.parentElement.setAttribute("data-error-visible", "false");
    return true
  }
};

//Email
mail.addEventListener('input', checkMail)
function checkMail() {
  if (mail.value.match(regexMail)) {
    mail.parentElement.setAttribute("data-error-visible", "false");
    return true
  } else {
    mail.parentElement.setAttribute("data-error-visible", "true");
    return false
  }
}

//Date de naissance
function checkBirth() {
  if (birthDate.value.match(regexDate)) {
    birthDate.parentElement.setAttribute("data-error-visible", "false");
    return true
  } else {
    birthDate.parentElement.setAttribute("data-error-visible", "true");
    return false
  }
}

//Nombre de participations
tournamentQuantity.addEventListener('input', checkTournament)
function checkTournament() {
  if (tournamentQuantity.value >= 0 && tournamentQuantity.value < 100 && tournamentQuantity.value !== '') {
    tournamentQuantity.parentElement.setAttribute("data-error-visible", "false");
    return true
  } else {
    tournamentQuantity.parentElement.setAttribute("data-error-visible", "true");
    return false
  }
}

//Choix d'un lieu
/*function checkLocalisation() {
  localisationChoice.setAttribute("data-error-visible", "true");
  for (let i = 0; i < localisationChoice.lenght; i++) {
    if (localisationChoice[i].checked) {
      localisationChoice.parentElement.setAttribute("data-error-visible", "false");
      return true
    }
  }
  return false
};*/


