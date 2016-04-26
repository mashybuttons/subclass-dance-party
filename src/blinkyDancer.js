var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); // instance of makeBlinkyDancer; inherits from danc

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
  //this.oldStep = makeDancer.prototype.step
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step.call(this);

makeBlinkyDancer.prototype.randColor = function () {
  var rand = [];

  for (var i = 0; i < 3; i++) {
    rand.push(Math.floor(Math.random() * 255));
  }

  return 'rgb('+ rand.join(',') +')';

};
// makeBlinkyDancer.prototype.lineup = function(top, left) {
//   this.setPosition(top, left);
// };

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep
  makeDancer.prototype.step.call(this);

   /// MAYBE can just delte this to step once

   
  // console.log(makeDancer.prototype.step.call(this));
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // this.$node.animate( {border:"500px solid red",
  // "border-radius":"500px"}, 1000);

  // this.$node.toggle();
  this.$node.show("explode", {pieces: 144}, 100);
  this.$node.css('border-color', this.randColor());
  this.$node.hide("explode", {pieces: 144}, 750);
  debugger;
  this.$node.remove();
  //use cleratimeout, save the return value of timeout
  //remove expldoed dancer from window.dancer
  clearTImeout(a)
  console.log(window.dancers)
};
