import Phaser from "phaser";
import MainScene from "./scenes/MainScene";

const game = {
  parent: "phaser-container",
  width: "100",
  height: "100",
  type: Phaser.AUTO,
  scene: [MainScene]
}

const gameConfig =
{
  initialize: true,
  game
};

export default gameConfig;