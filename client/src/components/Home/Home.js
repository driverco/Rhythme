import React from "react";
import { useTranslation } from "react-i18next";
import pageHeader from "../common/PageHeader";
import section from "../common/Section";


function home() {
    const { t } = useTranslation("home");
    return (
        <React.Fragment>
            {pageHeader(t("welcomeTitle"),t("welcomeSubtitle"))}
            {section("0",t("section1.title"),t("section1.content"),"kid_drums.jpg")}
            {section("1",t("section2.title"),t("section2.content"),"kid_drums.jpg")}
            {section("0",t("section3.title"),t("section3.content"),"kid_drums.jpg")}
            {section("1",t("section4.title"),t("section4.content"),"kid_drums.jpg")}
        </React.Fragment>
    );
}

export default home;
