
import React from "react";
import config from "../../phaser/phaser_conf";
import "./Player.css";
import Phaser from "phaser";

export default class PhaserGame extends React.Component {
    componentDidMount() {
      var game = new Phaser.Game(config);
    }
    shouldComponentUpdate() {
      return false
    }
    render() {
      return <div id="phaser-game" />
    }
  }
