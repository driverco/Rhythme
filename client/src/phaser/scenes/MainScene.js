import Phaser from "phaser";
import SnareImg from "../assets/snare100.png";
import KickImg from "../assets/kickdrum100.png";
import FloorImg from "../assets/floordrum100.png";
import CymbalImg from "../assets/cymbal100.png";
import CircleImg from "../assets/circle50.png";
import ClickAudio from "../assets/audio/click.wav";
import SnareAudioMp3 from "../assets/audio/snare.mp3";
import SnareAudioOgg from "../assets/audio/snare.ogg";
import SnareAudioWav from "../assets/audio/snare.wav";
import KickAudioMp3 from "../assets/audio/kick.mp3";
import KickAudioOgg from "../assets/audio/kick.ogg";
import KickAudioWav from "../assets/audio/kick.wav";
import CymbalAudioMp3 from "../assets/audio/cymbal.mp3";
import CymbalAudioOgg from "../assets/audio/cymbal.ogg";
import CymbalAudioWav from "../assets/audio/cymbal.wav";
import FloorAudioMp3 from "../assets/audio/floor.mp3";
import FloorAudioOgg from "../assets/audio/floor.ogg";
import FloorAudioWav from "../assets/audio/floor.wav";
import Store from "../../redux/Store";
import { STOP, PLAYING } from "../../redux/actions/ControllerActions";

// create class for scene 1
/*var timer;*/

/*function playClick() {
  //clickSound.play();
}*/


let bpm;
let rectInst1, rectInst2, rectInst3, rectInst4;
var text;


class exampleScene1 extends Phaser.Scene {

  // build constructor
  constructor() {
    // create identifier for class scene
    super({ key: "MainScene" });
  }
  preload() {
    this.load.image("snareimg", SnareImg);
    this.load.image("kickimg", KickImg);
    this.load.image("floorimg", FloorImg);
    this.load.image("cymbalimg", CymbalImg);
    this.load.image("circleimg", CircleImg);
    
    this.load.audio("snareAudio", [SnareAudioOgg, SnareAudioMp3, SnareAudioWav]);
    this.load.audio("kickAudio", [KickAudioOgg, KickAudioMp3, KickAudioWav]);
    this.load.audio("cymbalAudio", [CymbalAudioOgg, CymbalAudioMp3, CymbalAudioWav]);
    this.load.audio("floorAudio", [FloorAudioOgg, FloorAudioMp3, FloorAudioWav]);
    this.load.audio("clickAudio", ClickAudio);
  }
  create() {
    Store.subscribe(() => {
      if (Store.getState().ControllerReducer.playingState===STOP)this.loadPattern();
    })
    console.log(this);
    /*this.physics.startSystem(Phaser.Physics.BOX2D);*/
    
    
    /*debug text*/
    var style = { font: "bold 32px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    text = this.add.text(215, 0, Store.getState().ControllerReducer.pattern.name, style);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    /*debug text*/



    /*timer = this.time.addEvent({
      delay: 500,                // ms
      callback: playClick,
      loop: true
    });*/
    this.loadPattern();
    this.circle = this.physics.add.sprite(820, 35+(105), "circleimg");
    this.circle.setOrigin(0);
    /*this.physics.enable(Phaser.Physics.ARCADE);
    this.physics.arcade.enable(this.circle);
    this.circle.body.setCircle(this.circle.width / 2);*/
    this.circle.body.velocity.x = -200;
    

  }


  /*create the rectangle of the background*/
  createRects() {
    var container1 = this.add.rectangle(5, 5, 990, 100, 0xffffff);
    var container2 = this.add.rectangle(5, 110, 990, 100, 0xffffff);
    var container3 = this.add.rectangle(5, 215, 990, 100, 0xffffff);
    var container4 = this.add.rectangle(5, 320, 990, 100, 0xffffff);
    container1.setOrigin(0);
    container2.setOrigin(0);
    container3.setOrigin(0);
    container4.setOrigin(0);
    var lineCenter1 = this.add.rectangle(210, 55, 790, 2, 0xaacccc);
    var lineCenter2 = this.add.rectangle(210, 160, 790, 2, 0xaacccc);
    var lineCenter3 = this.add.rectangle(210, 265, 790, 2, 0xaacccc);
    var lineCenter4 = this.add.rectangle(210, 370, 790, 2, 0xaacccc);
    lineCenter1.setOrigin(0);
    lineCenter2.setOrigin(0);
    lineCenter3.setOrigin(0);
    lineCenter4.setOrigin(0);
    var linedivide1 = this.add.rectangle(105, 0, 5, 450, 0xff3333);
    linedivide1.setOrigin(0);
    var linedivide2 = this.add.rectangle(210, 0, 5, 450, 0xff3333);
    linedivide2.setOrigin(0);

    rectInst1 = this.add.rectangle(110, 5, 100, 100, 0xffffff);
    rectInst2 = this.add.rectangle(110, 110, 100, 100, 0xffffff);
    rectInst3 = this.add.rectangle(110, 215, 100, 100, 0xffffff);
    rectInst4 = this.add.rectangle(110, 320, 100, 100, 0xffffff);
    rectInst1.setOrigin(0);
    rectInst2.setOrigin(0);
    rectInst3.setOrigin(0);
    rectInst4.setOrigin(0);

  }
  loadPattern() {
    this.createRects();
    const pattern = Store.getState().ControllerReducer.pattern;
    bpm = pattern.bpm;
    text.setText(pattern.bpm);

    pattern.instruments.map((instrument, index) => {
      switch (instrument.type){
        case "snare":this.loadInst(this.snare, this.snareAudio, "snare", index, Store.getState().ControllerReducer.keyPress[index]);break;
        case "kick":this.loadInst(this.kick, this.kickAudio, "kick", index, Store.getState().ControllerReducer.keyPress[index]);break;
        case "cymbal":this.loadInst(this.cymbal, this.cymbalAudio, "cymbal", index, Store.getState().ControllerReducer.keyPress[index]);break;
        case "floor":this.loadInst(this.floor, this.floorAudio, "floor", index, Store.getState().ControllerReducer.keyPress[index]);break;
        default:this.loadTypeError(index);break;
      }
      /*text.setText(instrument.type+":"+index);*/
    });

/*
    clickSound = this.sound.add("clickAudio");
    kickSound = this.sound.add("kickAudio");
    clickSound.allowMultiple = true;
*/
  }
  loadInst(inst, audio, type, index, keyPress) {
    inst = this.add.sprite(110, 5+(105*index), type+"img").setInteractive();
    inst.setOrigin(0);
    audio = this.sound.add(type+"Audio");
    inst.on("pointerdown", (pointer) =>{
      audio.play();
      inst.setTint(0xff0000);
    });
    inst.on("pointerout", (pointer)  => {
      inst.clearTint();
    });
    inst.on("pointerup", (pointer)   =>{
      inst.clearTint();
    });
    var style = { font: "bold 90px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    this.add.text(20,10+(105*index) , keyPress, style);
    this.input.keyboard.on("keydown-"+keyPress, function (event) {
      audio.play();
    });

  }
}


export default exampleScene1;