import Phaser from "phaser";
import SnareImg from "../assets/snare.png";
import ClickAudio from "../assets/audio/click.wav";
import SnareAudioMp3 from "../assets/audio/snare.mp3";
import SnareAudioOgg from "../assets/audio/snare.ogg";
import SnareAudioWav from "../assets/audio/snare.wav";
import KickAudioMp3 from "../assets/audio/kick.mp3";
import KickAudioOgg from "../assets/audio/kick.ogg";
import KickAudioWav from "../assets/audio/kick.wav";

// create class for scene 1
var clickSound;
var snareSound;
var kickSound;
/*var timer;*/
var snare;

/*function playClick() {
  //clickSound.play();
}*/
function playSnare() {
  snareSound.play();
}
function playKick() {
  kickSound.play();
}

class exampleScene1 extends Phaser.Scene {
  // build constructor
  constructor() {
    // create identifier for class scene
    super({ key: "MainScene" });
  }

  preload() {
    this.load.image("snare", SnareImg);
    this.load.audio("snareAudio", [SnareAudioOgg, SnareAudioMp3, SnareAudioWav ]);
    this.load.audio("kickAudio", [KickAudioOgg, KickAudioMp3, KickAudioWav]);
    this.load.audio("clickAudio", ClickAudio);
  }

  create() {
    //  Hook to a specific key without creating a new Key object (in this case the A key)
    this.input.keyboard.on("keydown-A", function (event) {
      playSnare();
    });
    this.input.keyboard.on("keydown-G", function (event) {
      playKick();
    });


    snare = this.add.sprite(400, 300, "snare").setInteractive();
    clickSound = this.sound.add("clickAudio");
    snareSound = this.sound.add("snareAudio");
    kickSound = this.sound.add("kickAudio");
    clickSound.allowMultiple = true;
    /*timer = this.time.addEvent({
      delay: 500,                // ms
      callback: playClick,
      loop: true
    });*/

    snare.on("pointerdown", function (pointer) {
      playSnare();
      this.setTint(0xff0000);
    });

    snare.on("pointerout", function (pointer) {
      this.clearTint();
    });

    snare.on("pointerup", function (pointer) {
      this.clearTint();
    });
  }
 
}

export default exampleScene1;