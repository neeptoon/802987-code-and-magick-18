'use strict';

var ESC_CODE = 27;
var ENTER_CODE = 13;
var amountWizardsRender = 4;
var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWindow.querySelector('.setup-close');
var setupUserName = setupWindow.querySelector('.setup-user-name');
var setupPlayer = document.querySelector('.setup-player');
var setupWizard = setupPlayer.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
var wizardEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireballInput = wizardFireball.querySelector('input[name="fireball-color"]');
var setupSimilarWindow = setupWindow.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = setupSimilarWindow.querySelector('.setup-similar-list');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomNumber = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * max - min + 1);
};

var getWizards = function () {
  var wizardsList = [];
  for (var i = 0; i < amountWizardsRender; i++) {
    var wizardName = names[getRandomNumber(0, names.length - 1)] + ' ' + surnames[getRandomNumber(0, surnames.length - 1)];

    var currentWizard = {
      name: wizardName,
      coatColor: colors[getRandomNumber(0, colors.length - 1)],
      eyesColor: eyes[getRandomNumber(0, eyes.length - 1)]
    };

    wizardsList.push(currentWizard);
  }
  return wizardsList;
};

var wizards = getWizards();

var getWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var index = 0; index < amountWizardsRender; index++) {
    fragment.appendChild(getWizard(wizards[index]));
  }
  return similarListElement.appendChild(fragment);
};
renderWizards();

var documentKeydownHandler = function (evt) {
  if (evt.target === setupUserName) {
    evt.stopPropagation();
  } else if (evt.keyCode === ESC_CODE) {
    closePopup();
  }
};

var setupCloseKeydownHandler = function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    closePopup();
  }
};

var setupCloseClickHandler = function () {
  closePopup();
};

var openPopup = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', documentKeydownHandler);
  setupClose.addEventListener('click', setupCloseClickHandler);
  setupClose.addEventListener('keydown', setupCloseKeydownHandler);
  setupUserName.addEventListener('invalid', checkForm);
};

var closePopup = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', documentKeydownHandler);
  setupClose.removeEventListener('click', setupCloseClickHandler);
  setupClose.removeEventListener('keydown', setupCloseKeydownHandler);
  setupUserName.removeEventListener('invalid', checkForm);
};

var checkForm = function () {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('Палехче, приятель!!');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Заполни поле');
  } else {
    setupUserName.setCustomValidity('');
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    openPopup();
  }
});

var changeParam = function (arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = changeParam(colors);
  wizardCoatInput.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = changeParam(eyes);
  wizardEyesInput.value = wizardEyes.style.fill;
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = changeParam(fireballs);
  wizardFireballInput.value = wizardFireball.style.background;
});
