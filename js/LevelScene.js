class LevelScene extends Phaser.Scene {
  constructor(){
    super('LevelScene');
  }
  init(data){
    this.levelKey = data.levelKey;
  }
  create(){
    const data = this.cache.json.get(this.levelKey);
    // platforms
    this.platforms = this.physics.add.staticGroup();
    data.platforms.forEach(p => {
      const width = p.xEnd - p.xStart;
      const plat = this.add.tileSprite((p.xEnd + p.xStart) / 2, p.y, width, 16, 'platform');
      this.physics.add.existing(plat, true);
      this.platforms.add(plat);
    });
    // ladders simple: for now not physics
    // player
    this.player = new Player(this, GAME_WIDTH/2, data.platforms[0].y - 50);
    this.physics.add.collider(this.player.sprite, this.platforms);

    // components
    this.components = this.physics.add.group();
    this.rackStacks = [];
    data.components.forEach(c => {
      const comp = new Component(this, c.x, c.y, c.type, c.column);
      this.components.add(comp.sprite);
    });
    this.physics.add.overlap(this.player.sprite, this.components, (player, comp) => {
      comp.getData('ref').startFalling();
    });
    this.physics.add.overlap(this.components, this.platforms, null, null, this); // to stop at bottom

    this.demand = data.demand;
    this.score = 0;

    this.events.emit('updateScore', this.score);
    this.events.emit('updateDemand', this.demand);
  }
  update(time, delta){
    this.player.update();
    this.components.children.iterate(obj => {
      if(obj.getData('ref')) obj.getData('ref').update();
    });
  }
}
