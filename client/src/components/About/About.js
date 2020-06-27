import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";
import Section from "../common/Section";


function About() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            <PageHeader header={t("welcomeTitle")} subheader={t("welcomeSubtitle")} />
            <Section type="0" title="Diana Paola Rinc&oacute;n" img="Diana2.jpg"/>
            <Section type="1" title="Wilmer Rodr&iacute;guez Camargo" img="Keanu-Reeves1.jpg"/>
            <Section type="0" title="Director: Wilson Javier Forero" img="maleModel1.jpg"/>
        </React.Fragment>
    );
}

export default About;
