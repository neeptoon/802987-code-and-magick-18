'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 20;
var GAP = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура Вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 60);

  ctx.fillText('вы', 140, 260);

  ctx.strokeStyle = 'red';

  ctx.lineWidth = 40;
  ctx.moveTo(140, 250);
  ctx.lineTo(140, 80);
  ctx.stroke();
  ctx.strokeStyle = 'blue';
};

