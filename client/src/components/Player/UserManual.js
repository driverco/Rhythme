import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import pageHeader from "../common/PageHeader";
import section from "../common/Section";
import "./UserManual.css";

function UserManual() {
    const { t } = useTranslation("player");
    return (
        <React.Fragment>
            {pageHeader(t("manual.title"), t("manual.subtitle"))}
            <Container className="subheader">{t("manual.controller")}</Container>
            {section("3", t("manual.topic1title"), [t("manual.topic1")], "ManualTopic1.png", "", "", false, false)}
            {section("3", t("manual.topic2title"), [t("manual.topic2")], "ManualTopic2.png", "", "", false, false)}
            {section("3", t("manual.topic3title"), [t("manual.topic3")], "ManualTopic3.png", "", "", false, false)}
            {section("3", t("manual.topic4title"), [t("manual.topic4")], "ManualTopic4.png", "", "", false, false)}
            {section("3", t("manual.topic5title"), [t("manual.topic5")], "ManualTopic5.png", "", "", false, false)}
            <Container className="subheader">{t("manual.player")}</Container>
            {section("3", t("manual.topic6title"), [t("manual.topic6")], "ManualTopic6.png", "", "", false, false)}
            {section("3", t("manual.topic7title"), [t("manual.topic7")], "ManualTopic7.png", "", "", false, false)}
            <Container className="subheader">{t("manual.pattern")}</Container>
            {section("3", t("manual.topic8title"), [t("manual.topic8")], "ManualTopic8.png", "", "", false, false)}
            {section("3", t("manual.topic9title"), [t("manual.topic9")], "ManualTopic9.png", "", "", false, false)}
            {section("3", t("manual.topic10title"), [t("manual.topic10")], "ManualTopic10.png", "", "", false, false)}
            {section("3", t("manual.topic11title"), [t("manual.topic11")], "ManualTopic11.png", "", "", false, false)}

        </React.Fragment>
    );
}

export default UserManual;
