$(document).ready(function() {
  window.dancers = [];

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
       // console.log('WHY!?', dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.floor(Math.random() * 3000) + 2000
    );
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


  $('body').on('click', '.star, .colored-dancer, .dancer', function(event) {
    var top = this.style.top;
    var left = this.style.left;
    var distances = {};
    var keysSorted = [];
    
    top = Math.round(+top.slice(0, -2));
    left = Math.round(+left.slice(0, -2));
    window.dancers.forEach(function(dancer) {
      var a = Math.pow(dancer.top - top, 2);
      var b = Math.pow(dancer.left - left, 2);
      var dist = Math.sqrt(a + b);

      distances[dist] = dancer;
      // if (Math.round(dancer.top) === top && Math.round(dancer.left) === left) {
      //   // dancer.step = function() {
      //   //   dancer.$node.show( 'explode', {pieces: 144}, 100);
      //   //   dancer.$node.hide( 'explode', {pieces: 144}, 750);
      //   //   dancer.$node.remove();
      //   // };
      //   // dancer.step();
        
      // }

    });

    for (var key in distances) {
      keysSorted.push(+key);
    }
    keysSorted.sort(function(a, b) {
      return a - b;
    });
    console.log(keysSorted);
  });
  //dancer on click
  //this.dancer .top and .right


});

