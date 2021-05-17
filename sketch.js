var canvas, backgroindImg;
var gameState = 0;
var playerCount;
var database;
var form, game, player;

function setup(){
  
  createCanvas(800, 400);
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  //background(0)
}


