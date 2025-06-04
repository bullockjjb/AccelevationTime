const PLAYER_PNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAAbklEQVR4nO3WsQ2AMAxEURsxCLswN7tkE1NRmkOy0DX/2kTxU1zYGSK1rlJ3VPI4szvbpo9PAwAAAAAAAACwA9pF4UlFzBeSlzr2HwAAAAAAAADsgD2ixLiVE/tD+hqpAf/G3gIAAAAAAADADrgBEqAMW4McGd0AAAAASUVORK5CYII=';
const COMPONENT_PNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAUklEQVR4nO3SUQ0AMQzD0G0amEIs1LLZwXj3kRCIJXt391twt6rk/zr0/Q8Ad2YsQBrQAGmAK+AAaYAr4ABpgCvgAGmAK+AAaYAr4ABpgCvgAB+hHBg9lbEVlwAAAABJRU5ErkJggg==';
const PLATFORM_PNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAQCAYAAADeWHeIAAAARUlEQVR4nO3SMQEAIAzAMEDN/BsEGRxNFPTonpm7yDq/A/jLAHEGiDNAnAHiDBBngDgDxBkgzgBxBogzQJwB4gwQZ4C4BxZzAZcUwQ/yAAAAAElFTkSuQmCC';
const LADDER_PNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAXUlEQVR4nO2SwQ0AIAjExPXcxIHcxPlwAOJLk97j+AJNmjQyW7aH6S/PXwBxW6xR1eau97wCDwh3IKDAA9yBggIPcAcKCjzAHSgo8AB3oKDAA9yBggIPcAcKCjzgAPW9MFmBaJLyAAAAAElFTkSuQmCC';

class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }
  preload() {
    this.load.image('platform', PLATFORM_PNG);
    this.load.image('ladder', LADDER_PNG);
    this.load.image('player', PLAYER_PNG);
    this.load.image('component', COMPONENT_PNG);
    this.load.image(
      'logo',
      'https://www.accelevationllc.com/uploads/_1200x630_fit_center-center_82_none/Accelevation-Logo.jpg?mtime=1725471630'
    );
    this.load.json('level1', 'js/levels/level1.json');
  }
  create() {
    this.scene.start('MainMenuScene');
  }
}
