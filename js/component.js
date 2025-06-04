class Component {
  constructor(scene,x,y,type,column){
    this.scene = scene;
    this.type = type;
    this.column = column;
    this.sprite = scene.physics.add.sprite(x,y,'component');
    this.sprite.setData('ref',this);
    this.isFalling = false;
  }
  startFalling(){
    if(this.isFalling) return;
    this.isFalling = true;
    this.sprite.setVelocityY(COMPONENT_FALL_SPEED);
  }
  update(){
    if(this.isFalling && this.sprite.y > GAME_HEIGHT){
      const stack = this.scene.rackStacks[this.column]||0;
      this.scene.rackStacks[this.column]=stack+1;
      this.sprite.destroy();
      this.scene.score += 10;
      this.scene.events.emit('updateScore', this.scene.score);
      if(this.scene.rackStacks[this.column]===6){
        this.scene.score += 200;
        this.scene.demand -=1;
        this.scene.events.emit('updateDemand', this.scene.demand);
      }
    }
  }
}
