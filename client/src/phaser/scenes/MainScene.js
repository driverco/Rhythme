import Phaser from "phaser";
import SnareImg from "../assets/snare100.png";
import KickImg from "../assets/kickdrum100.png";
import FloorImg from "../assets/floordrum100.png";
import CymbalImg from "../assets/cymbal100.png";
import CircleImg from "../assets/circle50.png";
import BgSquareImg from "../assets/bg.png";
import BarraImg from "../assets/barra.png";
import BarraImgEnd from "../assets/barraend.png";
import BarraFullImg from "../assets/barrafull.png";
import ContainerImg from "../assets/container.png";


import ClickAudio from "../assets/audio/click.wav";
import SnareAudioOgg from "../assets/audio/snare.ogg";
/*import SnareAudioMp3 from "../assets/audio/snare_basic.mp3";
import SnareAudioWav from "../assets/audio/snare_basic.wav";*/
import KickAudioOgg from "../assets/audio/kick.ogg";
/*import KickAudioMp3 from "../assets/audio/kick.mp3";
import KickAudioWav from "../assets/audio/kick.wav";*/
import CymbalAudioOgg from "../assets/audio/cymbal.ogg";
/*import CymbalAudioMp3 from "../assets/audio/cymbal.mp3";
import CymbalAudioWav from "../assets/audio/cymbal.wav";*/
import FloorAudioOgg from "../assets/audio/floor.ogg";
/*import FloorAudioMp3 from "../assets/audio/floor.mp3";
import FloorAudioWav from "../assets/audio/floor.wav";*/
import Store from "../../redux/Store";
import { STOP, PLAYING, FINISHED, endGame, RESTART, playStop } from "../../redux/actions/ControllerActions";

var playingState, changeState, timePLay, nextClickTime, bpm, restartTime, countTimes,  finishRect, finishText;

let beats, bars, endBars, inst1, inst2, inst3, inst4, container1, container2, container3, container4, failBar, successBar, demoPlay, repeatTimes, countText, timeNum, timeDen;
let score = {
  perfect: 0,
  good: 0,
  regular: 0,
  miss: 0,
  failkeypress: 0
};


class MainScene extends Phaser.Scene {

  constructor() {
    super({
      key: "MainScene",
      active: true,
    });
  }
  preload() {
    this.load.image("barraimg", BarraImg);
    this.load.image("barraimgend", BarraImgEnd);
    this.load.image("barrafullimg", BarraFullImg);
    this.load.image("snareimg", SnareImg);
    this.load.image("kickimg", KickImg);
    this.load.image("floorimg", FloorImg);
    this.load.image("cymbalimg", CymbalImg);
    this.load.image("circleimg", CircleImg);
    this.load.image("bgsquareimg", BgSquareImg);
    this.load.image("containerimg", ContainerImg);

    this.load.audio("snareAudio", [SnareAudioOgg/*, SnareAudioMp3, SnareAudioWav*/]);
    this.load.audio("kickAudio", [KickAudioOgg/*, KickAudioMp3, KickAudioWav*/]);
    this.load.audio("cymbalAudio", [CymbalAudioOgg/*, CymbalAudioMp3, CymbalAudioWav*/]);
    this.load.audio("floorAudio", [FloorAudioOgg/*, FloorAudioMp3, FloorAudioWav*/]);
    this.load.audio("clickAudio", ClickAudio);
  }
  instPlay(inst) {
    inst.audio.play();
    if (playingState === PLAYING) {
      if (!(typeof inst.beat === "undefined")) {
        if (Phaser.Geom.Intersects.RectangleToRectangle(inst.getBounds(), inst.beat.getBounds())) {
          console.log(Phaser.Math.Distance.Between(inst.beat.getCenter().x, 0, successBar.getCenter().x, 0));
          if (Phaser.Math.Distance.Between(inst.beat.getCenter().x, 0, successBar.getCenter().x, 0) < 15) { score.perfect = score.perfect + 1; inst.container.setTint(0x00ff00); }
          else if (Phaser.Math.Distance.Between(inst.beat.getCenter().x, 0, successBar.getCenter().x, 0) < 45) { score.good = score.good + 1; inst.container.setTint(0xaaaa00); }
          else if (Phaser.Math.Distance.Between(inst.beat.getCenter().x, 0, successBar.getCenter().x, 0) < 85) { score.regular = score.regular + 1; inst.container.setTint(0xaa0000); }
          else { score.miss = score.miss + 1; inst.container.setTint(0xff0000); }
          inst.beat.destroy();
          inst.beat = undefined;

        }
      } else {
        console.log("fail keypress");
        score.failkeypress = score.failkeypress + 1;
      }
    }
  }

  create() {
    beats = this.physics.add.group();
    bars = this.physics.add.group();
    endBars = this.physics.add.group();
    this.pattern = Store.getState().ControllerReducer.pattern;
    timeNum = this.pattern.timeSignature[0];
    timeDen = this.pattern.timeSignature[2];
    bpm = Store.getState().ControllerReducer.bpm;
    repeatTimes = Store.getState().ControllerReducer.repeatTimes;
    demoPlay = Store.getState().ControllerReducer.demoPlay;
    Store.subscribe(() => {
      playingState = Store.getState().ControllerReducer.playingState;
      bpm = Store.getState().ControllerReducer.bpm;
      demoPlay = Store.getState().ControllerReducer.demoPlay;
      repeatTimes = Store.getState().ControllerReducer.repeatTimes;
      this.pattern = Store.getState().ControllerReducer.pattern;
      timeNum = this.pattern.timeSignature[0];
      timeDen = this.pattern.timeSignature[2];
      if (playingState === STOP) {
        this.loadPattern();
        timePLay = 0;
        nextClickTime = 0;
        countTimes = 0;
        this.calcNextClickTime();
        inst1.beat = undefined;
        inst2.beat = undefined;
        inst3.beat = undefined;
        inst4.beat = undefined;
        score.perfect = 0;
        score.good = 0;
        score.regular = 0;
        score.miss = 0;
        score.failkeypress = 0;
        inst1.container.clearTint();
        inst2.container.clearTint();
        inst3.container.clearTint();
        inst4.container.clearTint();
        finishRect.destroy();
        finishText.destroy();
      }
      if (playingState === FINISHED) {
        finishRect = this.add.rectangle(0, 0, 1000, 425, 0xffffff);
        finishRect.setOrigin(0);
        finishText = this.add.text(150, 0, "Results: \nHits Perfect: " + score.perfect + "\nHits Good: " + score.good + "\nHits Regular: " + score.regular + " \nMiss: " + score.miss + "\nFails: " + score.failkeypress, { font: "bold 40px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" });
            finishRect.depth = 2;
        finishText.depth = 2;
      }
    });
    finishRect = this.add.rectangle(0, 0, 0, 0, 0xffffff);
    finishText = this.add.rectangle(0, 0, 0, 0, 0xffffff);


    playingState = Store.getState().ControllerReducer.playingState;
    changeState = playingState;
    this.widthBoard = 210 + 22 + 480;
    inst1 = this.physics.add.sprite(190, 5, "bgsquareimg").setAlpha(0).setInteractive();
    inst2 = this.physics.add.sprite(190, 110, "bgsquareimg").setAlpha(0).setInteractive();
    inst3 = this.physics.add.sprite(190, 215, "bgsquareimg").setAlpha(0).setInteractive();
    inst4 = this.physics.add.sprite(190, 320, "bgsquareimg").setAlpha(0).setInteractive();
    inst1.beat = undefined;
    inst2.beat = undefined;
    inst3.beat = undefined;
    inst4.beat = undefined;
    container1 = this.add.sprite(5, 5, "containerimg");
    container2 = this.add.sprite(5, 110, "containerimg");
    container3 = this.add.sprite(5, 215, "containerimg");
    container4 = this.add.sprite(5, 320, "containerimg");
    container1.setOrigin(0);
    container2.setOrigin(0);
    container3.setOrigin(0);
    container4.setOrigin(0);

    inst1.container = container1;
    inst2.container = container2;
    inst3.container = container3;
    inst4.container = container4;

    inst1.validateBeat = this.instPlay;
    this.input.keyboard.on("keydown-" + Store.getState().ControllerReducer.keyPress[0], function (event) {
      inst1.validateBeat(inst1);
    });
    if (this.pattern.instruments.length > 1) {
      this.input.keyboard.on("keydown-" + Store.getState().ControllerReducer.keyPress[1], function (event) {
        inst1.validateBeat(inst2);
      });
    }
    if (this.pattern.instruments.length > 2) {
      this.input.keyboard.on("keydown-" + Store.getState().ControllerReducer.keyPress[2], function (event) {
        inst1.validateBeat(inst3);
      });
    }
    if (this.pattern.instruments.length > 3) {
      this.input.keyboard.on("keydown-" + Store.getState().ControllerReducer.keyPress[3], function (event) {
        inst1.validateBeat(inst4);
      });
    }

    failBar = this.physics.add.sprite(0, 0, "barrafullimg").setInteractive();
    successBar = this.physics.add.sprite(210, 0, "barrafullimg").setInteractive();
    this.timeText = this.add.text(100, 200, "", { fill: "#000" });
    timePLay = 0;
    nextClickTime = 0;
    restartTime = 0;
    countTimes = 0;
    this.calcNextClickTime();

    inst1.setOrigin(0.5, 0);
    inst2.setOrigin(0.5, 0);
    inst3.setOrigin(0.5, 0);
    inst4.setOrigin(0.5, 0);
    failBar.setOrigin(0);
    successBar.setOrigin(0);
    inst1.displayWidth = 175;
    inst2.displayWidth = 175;
    inst3.displayWidth = 175;
    inst4.displayWidth = 175;

    this.loadPattern();
    countText = this.add.text(220, 100, "Ready", { font: "bold 90px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" });

  }

  update(time, delta) {
    /*    if (!(typeof inst1.beat === "undefined"))
          inst1.beat.setTint(0xff0000);*/
    if (playingState === RESTART) {
      Store.dispatch(playStop());
      this.scene.restart();
    }
    if (changeState !== playingState) {
      if (playingState === PLAYING && timeNum - 1 < countTimes) { /*(60000 * (timeNum) / bpm) */
        changeState = playingState;
        this.setSpeed();
      }
      if (playingState === STOP) {
        countText.setText("Ready");
        restartTime = 0;
        countTimes = 0;
        this.setSpeed();
        changeState = playingState;
      }
      if (playingState === FINISHED) {
        countText.setText("Finish");
      }

    }
    failBar.depth = 1;
    successBar.depth = 1;
    if (playingState === PLAYING) {
      countText.depth = 1;

      if (countTimes <= timeNum) countText.setText(countTimes + "/" + timeDen);
      else countText.setText("");
      if (restartTime > (60000 * (timeNum - 1) / bpm)) {
        timePLay += delta;
      } else {
        restartTime = restartTime + delta;
      }
    }
    if (restartTime + timePLay > nextClickTime && countTimes <= timeNum) {
      countTimes++;
      this.calcNextClickTime();
      this.clickAudio.play();
    }
    this.timeText.depth = 1;
    /*this.timeText.setText('timeNum: ' + timeNum + ' \ninst.beat: ' + (!(typeof inst1.beat === "undefined") ? Phaser.Geom.Intersects.RectangleToRectangle(inst1.getBounds(), inst1.beat.getBounds()) : "false") + '\nDelta: ' + delta + '\ntimePLay: ' + timePLay + '\nrestartTime: ' + restartTime + '\nnextClickTime: ' + nextClickTime + '\ncountTimes: ' + countTimes);*/
    /*this.timeText.setText('perfect: ' + score.perfect + '\ngood: ' + score.good + '\nregular: ' + score.regular + ' \nmiss: ' + score.miss + '\nfailkeypress: ' + score.failkeypress);*/

  }
  calcNextClickTime() {
    nextClickTime = nextClickTime + (60000 / bpm);
  }

  loadPattern() {
    this.clearObjArray();
    this.pattern.instruments.forEach((instrument, index) => {
      switch (index) {
        case 0: inst1.audio = this.sound.add(instrument.type + "Audio"); break;
        case 1: inst2.audio = this.sound.add(instrument.type + "Audio"); break;
        case 2: inst3.audio = this.sound.add(instrument.type + "Audio"); break;
        case 3: inst4.audio = this.sound.add(instrument.type + "Audio"); break;
        default: break;
      }
      this.loadInst(instrument.type, index, Store.getState().ControllerReducer.keyPress[index]);
      this.loadPatternCode(index, instrument.patternCode);
    });
    this.clickAudio = this.sound.add("clickAudio");
    this.physics.add.overlap([inst1, inst2, inst3, inst4], beats, this.beatOver, null, this);
    this.physics.add.overlap(failBar, bars, this.destroyBar, null, this);
    this.physics.add.overlap(failBar, endBars, this.endPattern, null, this);
    this.physics.add.overlap(failBar, beats, this.beatFail, null, this);

  }

  loadPatternCode(patternIndex, patternCode) {
    const patternCodeArray = Array.from(patternCode);
    let posX = this.widthBoard;
    for (let i = 1; i <= repeatTimes; i++) {
      patternCodeArray.forEach((beat, index) => {
        if (beat === "1") beats.create(posX, 55 + (105 * patternIndex), "circleimg");
        if (index % (timeNum * 2) === 0) bars.create(posX - 120, 55 + (105 * patternIndex), "barraimg");
        posX += 240;
      });
    }
    endBars.create(posX, 55 + (105 * patternIndex), "barraimgend");
    /*endBars.create(posX + 20, 55 + (105 * patternIndex), "barraimg");*/

  }
  destroyBar(inst, bar) {
    bar.setActive(false).setVisible(false);
    bar.disableBody(true, true);
  }
  endPattern(inst, bar) {
    this.destroyBar(inst, bar);
    //*acabar el juego aquiiiiiii */
    Store.dispatch(endGame());

  }

  beatOver(inst, beat) {
    if (demoPlay) {
      inst.audio.play();
      beat.setActive(false).setVisible(false);
      beat.disableBody(true, true);
    }
    inst.beat = beat;
    /*console.log('Elapsed seconds: ' + (timePLay + restartTime));*/
  }


  beatFail(failbar, beat) {
    beat.setActive(false).setVisible(false);
    beat.disableBody(true, true);
    beat.destroy();
    score.miss = score.miss + 1;
    console.log('fail:');
  }

  loadInst(type, index, keyPress) {
    let inst = this.physics.add.sprite(110, 5 + (105 * index), type + "img").setInteractive();
    inst.setOrigin(0);
    var style = { font: "bold 90px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    this.add.text(20, 10 + (105 * index), keyPress, style);
  }

  clearObjArray() {
    beats.clear(true, true);
    bars.clear(true, true);
    endBars.clear(true, true);
  }

  setSpeed() {
    console.log("set speed");
    const speed = (playingState === PLAYING ? -(bpm * 8) : 0);
    beats.children.iterate((objbeat) => {
      objbeat.body.velocity.x = speed;
    });
    bars.children.iterate((objbeat) => {
      objbeat.body.velocity.x = speed;
    });
    endBars.children.iterate((objbeat) => {
      objbeat.body.velocity.x = speed;
    });
  }

}
export default MainScene;