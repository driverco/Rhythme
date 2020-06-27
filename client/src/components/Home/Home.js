import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";
import Section from "../common/Section";


function Home() {
    const { t } = useTranslation("home");
    return (
        <React.Fragment>
            <PageHeader header={t("welcomeTitle")} subheader= {t("welcomeSubtitle")}/>
            <Section type="0" title="For those about to rock..." img="kid_drums.jpg"/>
            <Section type="1" title="For those about to rock..." img="kid_drums.jpg"/>
            <Section type="0" title="For those about to rock..." img="kid_drums.jpg"/>
            <Section type="1" title="For those about to rock..." img="kid_drums.jpg"/>
        </React.Fragment>
    );
}

export default Home;
