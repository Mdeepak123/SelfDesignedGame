class Player {
    constructor(){
      this.index = null;
      this.x = null;
      this.y = null;
      this.name = null;

    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      });
    }

    writePosition(x,y){
      database.ref("players/player").set({
        x:soccerPlayers[index-1].x,
        y:soccerPlayers[index-1].y
      });

      player.x = player.x+x;
      player.y = player.y+y;
    }

    readOP(data){
      player = data.val();
      players.x = player.x;
      players.y = player.y;
    }
}