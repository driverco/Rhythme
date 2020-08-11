import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";
import { IonPhaser } from "@ion-phaser/react";
import gameConfig from "../../phaser/phaser_conf";
import "./Player.css";
import Controller from "./Controller";


function Player() {
    const { t } = useTranslation("player");
    const { initialize, game } = gameConfig;
    return (
        <React.Fragment>
            <PageHeader header={t("welcomeTitle")} subheader={t("welcomeSubtitle")} />
            <Controller />
            <div id="phaser-container" className="PhaserContainer">
                <IonPhaser game={game} initialize={initialize}  />
            </div>

        </React.Fragment>
    );
}

export default Player;
