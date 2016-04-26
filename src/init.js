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
       // console.log('WHY!?', dancerMakerFunctionName);

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
      // setting first star (which is "closest" star)
      // if (Math.round(star.top) === top && Math.round(star.left) === left) {
      //   distances['0'] = star
      // }
      var a = Math.pow(star.top - top, 2);
      var b = Math.pow(star.left - left, 2);
      var dist = Math.sqrt(a + b);

      distances[dist] = star;
      // console.log(distances);
    });

    for (var key in distances) {
      // console.log(distances);
      keysSorted.push(+key);
    }
    keysSorted.sort(function(a, b) {
      return a - b;
    });
    // console.log('keysSorted:', keysSorted);
    // console.log('distances;', distances);
    // console.log(keysSorted[1].toString())
    // console.log('target', distances[keysSorted[1].toString()]);
    // console.log('originalstar', distances[0]);

    //to match target to star obj inside windows.stars
    //loop through window.stars with forEach(funciton(star))
    //if star === target, 
      //wind
    

    var target = distances[keysSorted[1]];
    target.explode();
    
    window.stars.forEach(function(star,i) {
      // console.log('deep', deepEqual(target, star))
      // console.log('nondeep', star === target)
      if (star === target) { // need deep equals function from precourse
        window.stars.splice(i, 1)
      }
    });
    // console.log('target:', target);

    // target.remove();
    // console.log(window.stars[keysSorted[1]]);
    // window.stars[keysSorted[1]].explode();

    // remove from list once clicked. access it using the $this function

  }); 


  $('body').on('click', '.star, .colored-dancer, .dancer', function(event) {

      // if (Math.round(dancer.top) === top && Math.round(dancer.left) === left) {
      //   dancer.step = function() {
  //        this.$node.show("explode", {pieces: 144}, 100);
  // this.$node.css('border-color', this.randColor());
  // this.$node.hide("explode", {pieces: 144}, 750);
  // this.$node.remove();
      // }




  //dancer on click
  //this.dancer .top and .right


  });
});