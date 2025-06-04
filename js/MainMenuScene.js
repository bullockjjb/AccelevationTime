class MainMenuScene extends Phaser.Scene {
  constructor(){
    super('MainMenuScene');
  }
  create(){
    const centerX = this.scale.width/2;
    const centerY = this.scale.height/2;
    this.add.image(centerX, centerY - 150, 'logo').setOrigin(0.5).setScale(0.4);
    this.add.text(centerX, centerY - 30, 'Accelevation Time!!', {
      fontFamily: 'Press Start 2P',
      fontSize: '24px',
      color: '#FFA500'
    }).setOrigin(0.5);
    this.add.text(centerX, centerY + 20, 'Press Any Key to Start', {
      fontFamily: 'Press Start 2P',
      fontSize: '16px',
      color: '#FFA500'
    }).setOrigin(0.5);
    this.add.text(centerX, this.scale.height - 40, 'Made by Joe Bullock © 2025', {
      fontFamily: 'Roboto',
      fontSize: '14px',
      color: '#FFA500'
    }).setOrigin(0.5);

    const hero = this.add.sprite(-50, centerY + 80, 'player');
    hero.setScale(2);
    const jumpSound = () => this.sound.play('jump');
    const tl = this.tweens.createTimeline();
    tl.add({ targets: hero, x: centerX - 100, duration: 800 });
    tl.add({ targets: hero, y: hero.y - 80, yoyo: true, duration: 200, onStart: jumpSound });
    tl.add({ targets: hero, y: hero.y - 80, yoyo: true, duration: 200, onStart: jumpSound });
    tl.add({ targets: hero, x: this.scale.width + 50, duration: 1000, onStart: () => hero.setFlipX(false) });
    tl.play();

    const startGame = () => this.scene.start('LevelScene', { levelKey: 'level1' });
    this.input.keyboard.once('keydown', startGame);
    this.input.once('pointerdown', startGame);
  }
}
