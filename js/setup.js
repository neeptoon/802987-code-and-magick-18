'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * max - min + 1);
};
var amountWizardsRender = 4;

var getWizards = function () {
  var wizardsList = [];
  for (var i = 0; i < amountWizardsRender; i++) {
    var wizardName = names[getRandomNumber(0, names.length - 1)] + ' ' + surnames[getRandomNumber(0, surnames.length - 1)];

    var currentWizard = {
      name: wizardName,
      colors: colors[getRandomNumber(0, colors.length - 1)],
      eyes: eyes[getRandomNumber(0, eyes.length - 1)]
    };

    wizardsList.push(currentWizard);
  }
  return wizardsList;
};

var wizards = getWizards();

var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');
var setupSimilarWindow = setupWindow.querySelector('.setup-similar');
setupSimilarWindow.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = setupSimilarWindow.querySelector('.setup-similar-list');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colors;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var index = 0; index < amountWizardsRender; index++) {
  fragment.appendChild(renderWizard(wizards[index]));
}

similarListElement.appendChild(fragment);
