import React from 'react';
import { useTranslation } from "react-i18next";
import PageHeader from '../common/PageHeader';


function About() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            <PageHeader header={t("welcomeTitle")} subheader={t("welcomeSubtitle")} />
            <h1>Rhythme App</h1>
            <h2>Created by:</h2><br />
                Diana Paola Rinc&oacute;n<br />
                Wilmer Rodr&iacute;guez<br />
                Universidad Antonio Nari&ntilde;o
        </React.Fragment>
    );
}

export default About;
