class Form{
  constructor(){
      this.title = createElement('h1');
      this.button = createButton('Play')
      this.input = createInput("Enter Name");

      this.reset = createButton('Reset')
  }

  hide(){
      this.input.hide();
      this.button.hide();
      this.title.hide();
  }

  display(){

      this.title.html("Soccer Game");
      this.title.position(displayWidth/2-150, 300);
      this.title.style('font-size', '70px');
      this.button.position(displayWidth/2-30,displayHeight/2)
      this.reset.position(200,200);
      this.input.position(displayWidth/2 - 40,displayHeight/2 - 50);
      
      this.title.style('stroke', 'white');
      this.title.style('color', 'red');

      

      this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.update(0);
      });     
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          this.title.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
      });


      
  }
}