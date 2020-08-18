import React from "react";
import { useTranslation } from "react-i18next";
import Section from "../common/Section";
import PageHeader from "../common/PageHeader";

function Team() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            {PageHeader(t("team.title"), t("team.content"))}
            {Section("0", "Diana Paola Rincón", t("diana.content"), "Diana2.jpg")}
            {Section("1", "Wilmer Rodríguez Camargo", t("wilmer.content"), "Keanu-Reeves1.jpg")}
            {Section("0", "Director: Wilson Javier Forero", t("wilson.content"), "maleModel1.jpg")}
        </React.Fragment>
    );
}

export default Team;
