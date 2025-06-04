class Player {
  constructor(scene,x,y){
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x,y,'player');
    this.sprite.setData('ref',this);
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.wasd = scene.input.keyboard.addKeys({
      up:Phaser.Input.Keyboard.KeyCodes.W,
      down:Phaser.Input.Keyboard.KeyCodes.S,
      left:Phaser.Input.Keyboard.KeyCodes.A,
      right:Phaser.Input.Keyboard.KeyCodes.D,
      space:Phaser.Input.Keyboard.KeyCodes.SPACE
    });
  }
  update(){
    const left = this.cursors.left.isDown || this.wasd.left.isDown;
    const right = this.cursors.right.isDown || this.wasd.right.isDown;
    const up = this.cursors.up.isDown || this.wasd.up.isDown;
    const down = this.cursors.down.isDown || this.wasd.down.isDown;

    if(left){
      this.sprite.setVelocityX(-PLAYER_SPEED);
    }else if(right){
      this.sprite.setVelocityX(PLAYER_SPEED);
    }else{
      this.sprite.setVelocityX(0);
    }
    if(up){
      this.sprite.setVelocityY(-CLIMB_SPEED);
    }else if(down){
      this.sprite.setVelocityY(CLIMB_SPEED);
    }else{
      this.sprite.setVelocityY(0);
    }
  }
}
