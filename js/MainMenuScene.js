class MainMenuScene extends Phaser.Scene {
  constructor(){
    super('MainMenuScene');
  }
  create(){
    this.add.image(GAME_WIDTH/2, GAME_HEIGHT/2 - 150, 'logo').setOrigin(0.5).setScale(0.4);
    const title = this.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 30, 'Acceleration Time', {
      fontFamily: 'Press Start 2P',
      fontSize: '18px',
      color: '#FFA500'
    }).setOrigin(0.5);
    const start = this.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 20, 'Press Space to Start', {
      fontFamily: 'Press Start 2P',
      fontSize: '12px',
      color: '#FFA500'
    }).setOrigin(0.5);
    const credit = this.add.text(GAME_WIDTH/2, GAME_HEIGHT - 40, 'Made by Joe Bullock © 2025', {
      fontFamily: 'Roboto',
      fontSize: '12px',
      color: '#FFA500'
    }).setOrigin(0.5);
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.startKey.on('down', () => {
      this.scene.start('LevelScene', { levelKey: 'level1' });
    });
  }
}
