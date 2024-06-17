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
  var WASD = {
    LEFT: 65,
    RIGHT: 68,
    UP: 87,
    DOWN: 83
  }
  // Game Item Objects
  var walker1 = {
    locationX: 0, //Stores the walker's X location
    locationY: 0, //Stores the walker's Y location
    speedX: 0, //Stores the walker's X speed
    speedY: 0 //Stores the walker's Y speed
  }
  var walker2 = {
    locationX: 0, //Stores the walker's X location
    locationY: 0, //Stores the walker's Y location
    speedX: 0, //Stores the walker's X speed
    speedY: 0 //Stores the walker's Y speed
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown); //When a key is pressed it calls the function handleKeyDown//
  $(document).on('keyup', handleKeyUp); //When a key is released it calls the function handleKeyUp//
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  //Prints what key was pressed
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker1.speedX = -5
      console.log("Left was pressed");
    }; 
    if (event.which === KEY.UP){
      walker1.speedY = -5
      console.log("Up was pressed");
    }
    else if (event.which === KEY.RIGHT){
      walker1.speedX = 5
      console.log("Right was pressed");
    }
    else if (event.which === KEY.DOWN){
      walker1.speedY = 5
      console.log("Down was pressed");
    }
  }
  function handleKeyUp(event){
    if (event.which === KEY.LEFT){
      walker1.speedX = walker1.speedX - walker1.speedX;
      console.log("Left was let go");
    }; 
    if (event.which === KEY.UP){
      walker1.speedY = walker1.speedY - walker1.speedY;
      console.log("Up was let go");
    }
    else if (event.which === KEY.RIGHT){
      walker1.speedX = walker1.speedX - walker1.speedX;
      console.log("Right was let go");
    }
    else if (event.which === KEY.DOWN){
      walker1.speedY = walker1.speedY - walker1.speedY;
      console.log("Down was let go");
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){
    walker1.locationX += walker1.speedX;
    walker1.locationY += walker1.speedY;
  }

  function redrawGameItem(){
    $("#walker1").css("top", walker1.locationY);
    $("#walker1").css("left", walker1.locationX);
  }

  function wallCollision(){
    if (walker1.locationX > 385){
      walker1.speedX = walker1.speedX - walker1.speedX;
    }
    else if (walker1.locationY > 385){
      walker1.speedY = walker1.speedY - walker1.speedY;
    }
    else if (walke1r.locationX < 5){
      walker1.speedX = walker1.speedX - walker1.speedX;
    }
    else if (walker1.locationY < 5){
      walker1.speedY = walker1.speedY - walker1.speedY;
    }
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
