// Creating the ability to display the number of cookie clicks

  // Setting cookie variable to start at 0
    let cookieVal = 0;
  // Making a function that adds the cookie value to the 'number' which is tied to the onclick of the cookie image
    function cookieClick(number){
      cookieVal = cookieVal + number;
    // Using innerHTML to display number of cookie clicks
      document.querySelector('.cookieNum').innerHTML = cookieVal
    }


// Creating the ability to upgrade in the game by making batches based on number of cookie clicks

  let batch = 0;

  function makeBatch(){
    let cost = Math.floor(10 * Math.pow(1.7, batch));

    if(cookieVal >= cost){
      batch = batch + 1;
      cookieVal = cookieVal - cost;
      document.querySelector('#cookieBat').innerHTML = batch;
      document.querySelector('.cookieNum').innerHTML = cookieVal;
    }

  // Increasing the cost of each batch

    let nextCost = Math.floor(10 * Math.pow(1.7, batch));

    document.querySelector('#cookieCost').innerHTML = nextCost;
    
  }

// Setting an interval that repeats every 1.5seconds to add a cookie click equal to the current number of batches

  window.setInterval(function(){
    cookieClick(batch)
  }, 1500);
