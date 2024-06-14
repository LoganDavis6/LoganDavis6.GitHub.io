/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
  }
  // Game Item Objects
  var walker = {
    locationX: 0, //Stores the walker's X location
    locationY: 0, //Stores the walker's Y location
    speedX: 0, //Stores the walker's X speed
    speedY: 0 //Stores the walker's Y speed
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown); //When a key is pressed, it calls the function handleKeyDown//

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  //Prints what key was pressed
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = -5
      console.log("Left was pressed");
    }; 
    if (event.which === KEY.UP){
      console.log("Up was pressed");
    }
    else if (event.which === KEY.RIGHT){
      console.log("Right was pressed");
    }
    else if (event.which === KEY.DOWN){
      console.log("Down was pressed");
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){
    walker.locationX += walker.speedX;
    walker.locationY += walker.speedY;
  }

  function redrawGameItem(){
    $("#walker").css("top", locationY);
    $("#walker").css("left", locationX);
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
