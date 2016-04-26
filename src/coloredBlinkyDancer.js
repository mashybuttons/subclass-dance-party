var coloredBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps); // instance of makeBlinkyDancer; inherits from danc

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="colored-dancer"></span>'); 
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
  //this.oldStep = makeDancer.prototype.step
  this.setPosition(top, left);
};

coloredBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
coloredBlinkyDancer.prototype.constructor = coloredBlinkyDancer;


