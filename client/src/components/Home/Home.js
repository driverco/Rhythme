import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";
import Section from "../common/Section";


function Home() {
    const { t } = useTranslation("home");
    return (
        <React.Fragment>
            <PageHeader header={t("welcomeTitle")} subheader= {t("welcomeSubtitle")}/>
            <Section type="0" title={t("section1.title")} content={t("section1.content")} img="kid_drums.jpg"/>
            <Section type="1" title={t("section2.title")} content={t("section2.content")}  img="kid_drums.jpg"/>
            <Section type="0" title={t("section3.title")} content={t("section3.content")}  img="kid_drums.jpg"/>
            <Section type="1" title={t("section4.title")} content={t("section4.content")}  img="kid_drums.jpg"/>
        </React.Fragment>
    );
}

export default Home;
