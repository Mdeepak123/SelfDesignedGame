class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      r1 = createSprite(displayWidth/2-650, displayHeight/2-300);
      r1.addImage("player",redPlayer1);
      
      r2 = createSprite(displayWidth/2-650, displayHeight/2+100);
      r2.addImage("player",redPlayer2);
      
      b1 = createSprite(displayWidth/2+620, displayHeight/2-300);
      b1.addImage("player",bluePlayer1);

      b2 = createSprite(displayWidth/2+620, displayHeight/2+100);
      b2.addImage("player",bluePlayer2);

      ball = createSprite(displayWidth/2,displayHeight/2-60);
      ball.addImage("ball",ballImg);

      soccerPlayers = [r1,r2,b1,b2];
      ball.scale = 0.01;
    }

    play(){
      background(backgroundImg2);
      index = 0;

      var x; 
      var y;

      for(var plr in allplayers){

        //adding index to the players
        index = index+1;

        //taking data from database for the x and y position

        x = displayWidth - allplayers[plr].x;
        y = displayHeight-allplayers[plr].y;

        soccerPlayers[index-1].x = player.x;
        soccerPlayers[index-1].y = player.y;

        if(index=player.index){

          stroke(10);
          fill("red");
          eclipse(soccerPlayers[index-1].x,soccerPlayers[index-1].y, 40,40);
        }
      

      }

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.y +=10;
        player.update();
      }

      if(keyIsDown(DOWN_ARROW)&& player.index !== null){
        player.y -=10;
        player.update();
      }

      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.x +=10;
        player.update();
      }

      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.x -=10;
        player.update();
      }

      drawSprites();
    }
}