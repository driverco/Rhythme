import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";
import Section from "../common/Section";


function Home() {
    const { t } = useTranslation("home");
    return (
        <React.Fragment>
            {PageHeader(t("welcomeTitle"),t("welcomeSubtitle"))}
            {Section("0",t("section1.title"),t("section1.content"),"kid_drums.jpg")}
            {Section("1",t("section2.title"),t("section2.content"),"kid_drums.jpg")}
            {Section("0",t("section3.title"),t("section3.content"),"kid_drums.jpg")}
            {Section("1",t("section4.title"),t("section4.content"),"kid_drums.jpg")}
        </React.Fragment>
    );
}

export default Home;
