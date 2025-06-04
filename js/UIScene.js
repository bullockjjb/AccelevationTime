class UIScene extends Phaser.Scene {
  constructor(){
    super({key:'UIScene', active:true});
  }
  create(){
    this.scoreText = this.add.text(10,10,'Score:0',{
      fontFamily:'Press Start 2P',
      fontSize:'12px',
      color:'#FFA500'
    });
    this.demandText = this.add.text(10,30,'Racks:0',{
      fontFamily:'Press Start 2P',
      fontSize:'12px',
      color:'#FFA500'
    });

    this.scene.get('LevelScene').events.on('updateScore',score=>{
      this.scoreText.setText('Score:'+score);
    });
    this.scene.get('LevelScene').events.on('updateDemand',d=>{
      this.demandText.setText('Racks:'+d);
    });
  }
}
