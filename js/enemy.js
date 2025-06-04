class RogueForklift {
  constructor(scene,x,y){
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x,y,'player');
    this.sprite.setTint(0xff0000);
    this.sprite.setData('ref',this);
    this.speed = 100;
    this.sprite.setVelocityX(this.speed);
    this.sprite.setCollideWorldBounds(true);
    this.sprite.body.onWorldBounds = true;
    scene.physics.world.on('worldbounds', body=>{
      if(body.gameObject===this.sprite){
        this.speed *= -1;
        this.sprite.setVelocityX(this.speed);
      }
    });
  }
  update(){
    // simple
  }
}

class RogueAI {
  constructor(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x, y, 'rogueAI');
    this.sprite.setData('ref', this);
    this.speed = 80;
    this.sprite.setVelocityX(this.speed);
    this.sprite.setCollideWorldBounds(true);
    this.sprite.body.onWorldBounds = true;
    scene.physics.world.on('worldbounds', body => {
      if (body.gameObject === this.sprite) {
        this.speed *= -1;
        this.sprite.setVelocityX(this.speed);
      }
    });
  }
  update() {}
}
