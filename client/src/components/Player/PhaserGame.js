import React from "react";
import Phaser from "phaser";
import config from "../../phaser/gameConfig";


export default class PhaserGame extends React.Component {
  componentDidMount() {
    new Phaser.Game(config);
    
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div id="Game">
      </div>
    );
  }
}
