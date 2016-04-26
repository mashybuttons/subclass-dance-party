var starDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="star"><img src="src/mariostar.png"></span>');

  this.setPosition(top, left);
};

starDancer.prototype = Object.create(makeDancer.prototype);
starDancer.prototype.constructor = starDancer;

starDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};
starDancer.prototype.randColor = function () {
  var rand = [];

  for (var i = 0; i < 3; i++) {
    rand.push(Math.floor(Math.random() * 255));
  }

  return 'rgb('+ rand.join(',') +')';

};
starDancer.prototype.explode = function () {

  // show star using .show()
  this.$node.show();

  // then explode
  this.$node.show("explode", {pieces: 144}, 100);
  this.$node.css('border-color', this.randColor());
  this.$node.hide("explode", {pieces: 144}, 750);

  this.$node.remove();
};