import React from "react";
import { useTranslation } from "react-i18next";
import section from "../common/Section";
import pageHeader from "../common/PageHeader";

function Team() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            {pageHeader(t("team.title"), t("team.content"))}
            {section("0", "Diana Paola Rincón", [t("diana.content")], "Diana2.jpg")}
            {section("1", "Wilmer Rodríguez Camargo", [t("wilmer.content")], "Wilmer.jpg")}
            {section("0", "Director: Wilson Javier Forero", [t("wilson.content")], "logoUAN.png")}
        </React.Fragment>
    );
}

export default Team;
