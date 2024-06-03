var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createSawBlade(x,y){
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -hitZoneSize
      obstacleImage.y = -hitZoneSize
    }
    createSawBlade(400,groundY - 130)

    function createEnemy(x, y){
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = groundY - y;
      game.addGameItem(enemy);
      enemy.velocityX = -4;
      enemy.velocityY = 0;
      enemy.rotationalVelocity = -4;
      enemy.onPlayerCollision = function() {
        game.changeIntegrity(-20);
      }
      enemy.onProjectileCollision = function() {
        game.increaseScore(100);
        enemy.shrink();
      }
    }
    createEnemy(650, 50);
    createEnemy(750, 50);
    createEnemy(850, 50);
    //To Do 10 "Create a Reward"//
    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      reward.addChild(blueSquare);
      reward.x = x;
      reward.y = groundY - y;
      game.addGameItem(reward);
      reward.velocityX = -4;
      reward.velocityY = 0;
      reward.rotationalVelocity = -4;
      reward.scaleX = 1;
      reward.scaleY = 1;
      reward.onPlayerCollision = function() {
        game.changeIntegrity(+20);
      }
      reward.onProjectileCollision = function() {
        game.increaseScore(1150);
        reward.shrink();
      };
    }
    createReward(500,50)

    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 25);
      var violetSquare = draw.rect(50, 50, "violet");
      violetSquare.x = -25;
      violetSquare.y = -25;
      marker.addChild(violetSquare);
      marker.x = x;
      marker.y = groundY - y;
      game.addGameItem(marker);
      marker.velocityX = -1;
      marker.velocityY = 0;
      marker.rotationalVelocity = 0;
      marker.scaleX = 1;
      marker.scaleY = 1;
      marker.onPlayerCollision = function() {
        game.changeIntegrity(+100)
        game.increaseScore(150)
        startLevel();
      }
      marker.onProjectileCollision = function() {
        game.increaseScore(150);
        startLevel();
      };
    }
    createMarker(900, 50)

    

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;

      for (var i = 0; i < levelObjects.length; i++) {
        var current = levelObjects[i]

        if (current.type === "sawblade"){
          createSawBlade(current.x, current.y);
        }
        else if (furrent.type === "enemy"){
          createEnemy(current.x, current.y);
        }
        else if (current.type === "reward"){
          createReward(current.x, current.y);
        }
        else if (current.type === "marker"){
          createMarker(current.x, current.y);
        }
      }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
