'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var Mock = [];
for (var i = 0; i < 4; i++) {
  Mock[i] = {name: names[getRandomNumber(names)] + ' ' + surnames[getRandomNumber(surnames)], colors: colors[getRandomNumber(colors)], eyes: eyes[getRandomNumber(eyes)]};
}


