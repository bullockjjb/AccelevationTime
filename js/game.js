const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  physics: {
    default:'arcade',
    arcade:{debug:false}
  },
  scene:[BootScene,MainMenuScene,LevelScene,UIScene]
};
new Phaser.Game(config);
