var database;
var gameState = 0;
var playerCount;
var form, game, player;
var backgroundImg, redPlayer1, redPlayer2, bluePlayer1, bluePlayer2,backgroundImg2,ball,ballImg;
var soccerPlayers, plr, allplayers, index;

var r1, r2, b1, b2;

function preload(){
  backgroundImg = loadImage("Images/bckground.jpg");
  backgroundImg2 = loadImage("Images/soccerfield.png")
  redPlayer1 = loadImage("Images/Red/characterRed (1).png");
  redPlayer2 = loadImage("Images/Red/characterRed (2).png");

  bluePlayer1 = loadImage("Images/Blue/characterBlue (1).png");
  bluePlayer2 = loadImage("Images/Blue/characterBlue (4).png");

  ballImg = loadImage("Images/soccerball.png");

}

function setup(){
  createCanvas(displayWidth-40,displayHeight-150);
  
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background(backgroundImg);

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState ===1){
    game.play();
  }
  
}