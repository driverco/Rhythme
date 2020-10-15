import MainScene from "./scenes/MainScene";
import Phaser from "phaser";
const config = {
  parent: "phaser-container",
  width: 1000,
  height: 425,
  scene: [MainScene],
  type: Phaser.AUTO,
  physics: {
		default: "arcade",
		arcade: {
      debug: false,
      enableBody: true,
			gravity: { y: 0 }
    }
  },
  backgroundColor: "#C6C6C6"
};

export default config;