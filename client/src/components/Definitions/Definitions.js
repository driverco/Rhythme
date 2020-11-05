import React from "react";
import { useTranslation } from "react-i18next";
import pageHeader from "../common/PageHeader";
import defCard from "../common/DefCard";
import { Row, Col, Container } from "reactstrap";
import Beat from "../../img/life-rhythm.jpg";
import BPM from "../../img/Música-bpm400.png";
import TimeSignatures from "../../img/TimeSignatures-main_400.jpg";
import Accent from "../../img/Acento400.jpg";
import Figures from "../../img/figures.jpg";
import Rest from "../../img/rest.jpg";

function Definitions() {
    const { t } = useTranslation("definitions");
    return (
        <React.Fragment>
            {pageHeader(t("welcomeTitle"), t("welcomeSubtitle"))}
            <Container >
                <Row>
                    <Col sm="6">
                        {defCard(t("def1.title"), t("def1.content"), t("linkText"), "def/1", Beat, false)}
                    </Col>
                    <Col sm="6">
                        {defCard(t("def2.title"), t("def2.content"), t("linkText"), "def/2", BPM, false)}
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        {defCard(t("def3.title"), t("def3.content"), t("linkText"), "def/3", TimeSignatures, false)}
                    </Col>
                    <Col sm="6">
                        {defCard(t("def4.title"), t("def4.content"), t("linkText"), "def/4", Accent, false)}
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        {defCard(t("def5.title"), t("def5.content"), t("linkText"), "def/5", Figures, false)}
                    </Col>
                    <Col sm="6">
                        {defCard(t("def6.title"), t("def6.content"), t("linkText"), "def/6", Figures, false)}
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        {defCard(t("def7.title"), t("def7.content"), t("linkText"), "def/7", Rest, false)}
                    </Col>
                    <Col sm="6">
                        {defCard(t("def8.title"), t("def8.content"), t("linkText"), "def/8", Rest, false)}
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Definitions;
