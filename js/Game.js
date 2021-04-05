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

      ball = createSprite(displayWidth/2,displayHeight/2);
      ball.addImage("ball",ballImg);
      ball.scale = 0.01;
    }
}