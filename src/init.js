$(document).ready(function() {
  window.dancers = [];
  window.stars = []

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.floor(Math.random() * 2000) + 1000
    );

    if(dancer.constructor === starDancer) {
      window.stars.push(dancer)
      console.log(window.stars)
    }
    window.dancers.push(dancer);

    $('body').append(dancer.$node);

  });      
  $('.line-up').on('click', function(event) {
    var top = 300;
    var left = 0;
    window.dancers.forEach(function(dancer) {
      if (dancer.constructor === coloredBlinkyDancer) {
        dancer.lineup(top + 18, left + 20);
        left = left + 50;
      } else {
        dancer.lineup(top, left + 20);
        left = left + 60;
      }
    });
  });

  $('body').on('click', '.star', function(event) {
    var top = this.style.top;
    var left = this.style.left;
    var distances = {};
    var keysSorted = [];
    
    top = Math.round(+top.slice(0, -2));
    left = Math.round(+left.slice(0, -2));
    window.stars.forEach(function(star) {

      var a = Math.pow(star.top - top, 2);
      var b = Math.pow(star.left - left, 2);
      var dist = Math.sqrt(a + b);

      distances[dist] = star;
    });

    for (var key in distances) {
      keysSorted.push(+key);
    }
    keysSorted.sort(function(a, b) {
      return a - b;
    });


    var target = distances[keysSorted[1]];
    target.explode();
    
    window.stars.forEach(function(star,i) {
      if (star === target) { // need deep equals function from precourse
        window.stars.splice(i, 1)
      }
    });


  }); 


  $('body').on('mouseover', '.star, .colored-dancer, .dancer', function(event) {
    $(this).effect("pulsate");

  });
});