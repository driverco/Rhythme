import Phaser from "phaser";

function preload() {
  /*console.log("preloading assets");*/
  this.load.image("kickDrum", "assets/kickdrum200.png");
  this.load.image("snare", "assets/snare.png");
  this.load.image("floorDrum", "assets/floorDrum.png");
  this.load.image("cymbal", "assets/cymbal.png");
  this.load.audio('sfx', 'assets/audio/click.wav');
}
function create() {
  /*console.log("creating Scene");*/
  this.kickDrum = this.add.sprite(350, 450, "kickDrum");
  this.snare = this.add.sprite(200, 350, "snare");
  this.floorDrum = this.add.sprite(520, 450, "floorDrum");
  this.cymbal = this.add.sprite(600, 280, "cymbal");

  this.snare.setScale(0.25);
  this.floorDrum.setScale(0.25);
  this.cymbal.setScale(0.3);
  
  /*fx = this.game.add.audio('sfx');*/
  /*fx.allowMultiple = true;*/
  /*fx.addMarker('click', 0, 1.0);*/
  makeButton('click', 100, 100);


  /*
  this.helloWorld = this.add.text(
      this.cameras.main.centerX, 
      this.cameras.main.centerY, 
      "Hello World", { 
        font: "40px Arial", 
        fill: "#fff" 
      }
    );
    this.helloWorld.setOrigin(0.5);
*/
}

function update(time, delta) {
  /*    this.helloWorld.angle += 1;*/

}
function init() {
  this.cameras.main.setBackgroundColor("#24252A");
}
function render() {
  // Sprite debug info
  this.debug.spriteInfo(this.kickDrum, 40, 40);

}

const game = {
  parent: "phaser-container",
  width: "100",
  height: "100",
  type: Phaser.AUTO,
  scene: {
    preload,
    create,
    init,
    update,
    render
  }
}

const gameConfig =
{
  initialize: true,
  game
};


function makeButton(name, x, y) {

  var button = game.add.button(x, y, 'snare', click, this, 0, 1, 2);
  button.name = name;
  button.scale.set(2, 1.5);
  button.smoothed = false;

  var text = this.add.bitmapText(x, y + 7, 'nokia', name, 16);
  text.x += (button.width / 2) - (text.textWidth / 2);

}

function click(button) {

/*fx.play(button.name);*/

}

export default gameConfig;