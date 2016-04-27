describe('coloredBlinkyDancer', function() {

  var coloredBlinky, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    coloredBlinky = new coloredBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(coloredBlinky.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node show', function() {
    sinon.spy(coloredBlinky.$node, 'show');
    coloredBlinky.step();
    expect(coloredBlinky.$node.show.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(coloredBlinky, 'step');
      expect(coloredBlinky.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(coloredBlinky.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(coloredBlinky.step.callCount).to.be.equal(2);
    });
  });

  describe('lineup', function() {
    it('should be inherit lineup function', function() {
      // sinon.spy(coloredBlinky, 'lineup');
      expect(makeDancer.prototype.lineup).to.be.equal(coloredBlinky.lineup);
    });
  });

  describe('color', function() {
    it('show change color', function() {
      expect(coloredBlinky.$node[0].style.borderColor).to.be.empty;
      coloredBlinky.step();
      var var1 = coloredBlinky.$node[0].style.borderColor;
      coloredBlinky.step();
      // sinon.spy(coloredBlinky, 'lineup');
      expect(coloredBlinky.$node[0].style.borderColor).to.not.equal(var1);
    });
  });
});
