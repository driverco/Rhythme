import Phaser from "phaser";
import MainScene from "./scenes/MainScene";

const config = {
  parent: "phaser-container",
  width: 1000,
  height: 425,
  scene: [MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: false,
      debug: true
    }
  },
  type: Phaser.AUTO,
  backgroundColor: "#f63a3b"
};
/*
const gameConfig =
{
  initialize: true,
  game
};*/

export default config;