import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";
import "./Player.css";
import Controller from "./Controller";
import Status from "./Status";
import PhaserGame from "./PhaserGame";


function Player() {
    const { t } = useTranslation("player");
    return (
        <React.Fragment>
            {PageHeader(t("welcomeTitle"), t("welcomeSubtitle"))}
            <Controller />
            <div id="phaser-container" className="PhaserContainer">
                {/* <IonPhaser id="ionphaserGame" game={game} initialize={initialize} />*/}
                <PhaserGame />
            </div>
            <Status />
        </React.Fragment>
    );
}

export default Player;
