'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var TEXT_HEIGHT = 20;
var LEFT_MARGIN = 50;
var BOTTOM_MARGIN = 20;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var mainColor = 'rgba(255, 0, 0)';
var maxSaturation = 100;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + LEFT_MARGIN, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + LEFT_MARGIN, CLOUD_Y + GAP + TEXT_HEIGHT);
  ctx.textBaseline = 'bottom';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var secondColor = 'hsl(245, ' + Math.round(Math.random() * maxSaturation) + '%, 50%)';
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + LEFT_MARGIN + i * (COLUMN_WIDTH + COLUMN_GAP), CLOUD_HEIGHT - BOTTOM_MARGIN);
    ctx.fillText(Math.round(times[i]), CLOUD_X + LEFT_MARGIN + i * (COLUMN_WIDTH + COLUMN_GAP), CLOUD_HEIGHT - 2 * BOTTOM_MARGIN - COLUMN_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = names[i] === 'Вы' ? mainColor : secondColor;
    ctx.fillRect(CLOUD_X + LEFT_MARGIN + i * (COLUMN_WIDTH + COLUMN_GAP), CLOUD_HEIGHT - 2 * BOTTOM_MARGIN, COLUMN_WIDTH, -(COLUMN_HEIGHT * times[i] / maxTime));
  }
};

