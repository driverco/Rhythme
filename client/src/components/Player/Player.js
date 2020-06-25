import React from 'react';
import { useTranslation } from "react-i18next";
import PageHeader from '../common/PageHeader';


function Player() {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <PageHeader header={t("player.welcomeTitle")} subheader={t("player.welcomeSubtitle")} />
        </React.Fragment>
    );
}

export default Player;
