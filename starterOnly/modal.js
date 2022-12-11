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
const form = document.querySelector('form');
const sendButton = document.querySelector('.btn-submit');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const mail = document.querySelector('#email');
const birthDate = document.querySelector('#birthdate');
const tournamentQuantity = document.querySelector('#quantity');
const localisationChoice = document.querySelector('.checkbox-input');
const locations = document.querySelector('#locations');
const cguCheckbox = document.querySelector('#checkbox1');
const thanks = document.querySelector(".thanks");
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
firstName.addEventListener('input', checkFirstName)
lastName.addEventListener('input', checkLastName)
mail.addEventListener('input', checkMail)
birthDate.addEventListener('input', checkBirth)
tournamentQuantity.addEventListener('input', checkTournament)
locations.addEventListener('change', isLocationValid)
form.addEventListener('input', validate)
cguCheckbox.addEventListener('change', checkCond);

//Fonctions de validations
function checkBirth() {
  if (!isBirthDateValid()) {
    showError(birthDate);
  } else {
    hideError(birthDate);
  }
}
function checkCond(){
  if (!isCondCheckValid()) {
    showError(cguCheckbox);
  } else {
    hideError(cguCheckbox);
  }
}
function checkFirstName() {
  if (!isFirstNameValid()) {
    showError(firstName)
  } else {
    hideError(firstName);
  }
};
function checkLastName() {
  if (!isLastNameValid()) {
    showError(lastName);
  } else {
    hideError(lastName);
  }
};
function checkMail() {
  if (isMailValid()) {
    hideError(mail);
  } else {
    showError(mail);
  }
};
function checkTournament() {
  if (!isTournamentValid()) {
    showError(tournamentQuantity);
  } else {
    hideError(tournamentQuantity);
  }
}

//Apparaitre ou non le bouton
function disableSendButton() {
  sendButton.style.opacity = 0.3;
  sendButton.style.cursor= "not-allowed"
}
function enableSendButton() {
  sendButton.style.opacity = "1";
  sendButton.style.cursor= "pointer"
}

//Masquer l'erreur
function hideError(element) {
  return (element.parentElement.setAttribute("data-error-visible", "false"))
}

//Fonctions de vérifications
function isBirthDateValid() {
  if (birthDate.value.match(regexDate)) {
    return true
  }
  return false
};
function isCondCheckValid() {
  if (cguCheckbox.checked === true) {
    return true;
  } 
  return false;
}
function isFirstNameValid() {
  if (firstName.value.length > 2) {
    return true
  }
};
function isLastNameValid() {
  if (lastName.value.length > 2) {
    return true
  }
};
function isLocationValid() {
  let valid = false;
  let x = document.reserve.location;
  for(let i=0;i<x.length;i++) {
    if(x[i].checked) {
      valid = true;
      break
    }
  }
  if(valid) {
    locations.setAttribute("data-error-visible", "false");
    return true
  } else {
    locations.setAttribute("data-error-visible", "true");
    return false;
  }
}
function isMailValid() {
  if (mail.value.match(regexMail)) {
    return true
  } 
};
function isTournamentValid() {
  if (tournamentQuantity.value >= 0 && tournamentQuantity.value < 100 && tournamentQuantity.value !== '') {
    return true
  } 
}

//Afficher l'erreur
function showError(element) {
  return (element.parentElement.setAttribute("data-error-visible", "true"))
}

//Message de validation
function showValidationMessage() {
  form.style.display = "none";
  thanks.style.display = "flex"
}

function validate(){
  if (
    isFirstNameValid() &&
    isLastNameValid() &&
    isMailValid() &&
    isBirthDateValid() &&
    isTournamentValid() &&
    isLocationValid() &&
    isCondCheckValid()
    ) { 
    enableSendButton()
    return true;
  }
  disableSendButton()
  return false
}

//Afficher le message de validation
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate() === true) {
    showValidationMessage();
  }
});