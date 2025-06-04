const PLAYER_PNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVR4nO3OMQEAMAyAMDb/nlsZfYIB8pqmw/7lHAAAAAAAAAAAAAAAAAAAoGoBL+QCPnryT80AAAAASUVORK5CYII=';
const COMPONENT_PNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVR4nO3OMQEAMAyAMDb/nlsZfYIB8qamw/7lHAAAAAAAAAAAAAAAAAAAoGoBMOMCPjaZXrEAAAAASUVORK5CYII=';
const PLATFORM_PNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVR4nO3OMQEAMAyAMDb/nlsZfYIB8mqmw/7lHAAAAAAAAAAAAAAAAAAAoGoBLuUCPh2ERB4AAAAASUVORK5CYII=';
const LADDER_PNG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVR4nO3OMQEAMAyAMDb/nlsZfYIB8maaDvuXcwAAAAAAAAAAAAAAAAAAgKoFP7UDPTI6pxoAAAAASUVORK5CYII=';

class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }
  preload() {
    this.load.image('platform', PLATFORM_PNG);
    this.load.image('ladder', LADDER_PNG);
    this.load.image('player', PLAYER_PNG);
    this.load.image('component', COMPONENT_PNG);
    this.load.json('level1', 'js/levels/level1.json');
  }
  create() {
    this.scene.start('MainMenuScene');
  }
}
