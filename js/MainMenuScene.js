class MainMenuScene extends Phaser.Scene {
  constructor(){
    super('MainMenuScene');
  }
  create(){
    const title = this.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 50, 'Acceleration Time', {fontFamily: 'Press Start 2P', fontSize:'16px', color:'#fff'}).setOrigin(0.5);
    const start = this.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 20, 'Press Space to Start', {fontFamily:'Press Start 2P', fontSize:'12px', color:'#fff'}).setOrigin(0.5);
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('LevelScene', {levelKey:'level1'});
    });
  }
}
