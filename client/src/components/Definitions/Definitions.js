import React from "react";
import { useTranslation } from "react-i18next";
import pageHeader from "../common/PageHeader";
import defCard from "../common/DefCard";
import { Row, Col, Container } from "reactstrap";
import Beat from "../../img/life-rhythm.jpg";
import BPM from "../../img/Música-bpm.png";
import TimeSignatures from "../../img/TimeSignatures-main_Full.jpg";
import Accent from "../../img/Acento.jpg";

function Definitions() {
    const { t } = useTranslation("definitions");
    return (
        <React.Fragment>
            {pageHeader(t("welcomeTitle"), t("welcomeSubtitle"))}
            <Container fluid={false}>
                <Row>
                    <Col sm="3">
                        {defCard(t("def1.title"), t("def1.content"), t("linkText"), "def1", Beat, false)}
                    </Col>
                    <Col sm="3">
                        {defCard(t("def2.title"), t("def2.content"), t("linkText"), "def2", BPM, false)}
                    </Col>
                    <Col sm="3">
                        {defCard(t("def3.title"), t("def3.content"), t("linkText"), "def3", TimeSignatures, false)}
                    </Col>
                    <Col sm="3">
                        {defCard(t("def4.title"), t("def4.content"), t("linkText"), "def4", Accent, false)}
                    </Col>
                </Row>
                <Row>
                    <Col sm="3">
                        {defCard(t("def5.title"), t("def5.content"), t("linkText"), "def5", "kid_drums.jpg", false)}
                    </Col>
                    <Col sm="3">
                        {defCard(t("def6.title"), t("def6.content"), t("linkText"), "def6", "kid_drums.jpg", false)}
                    </Col>
                    <Col sm="3">
                        {defCard(t("def7.title"), t("def7.content"), t("linkText"), "def7", "kid_drums.jpg", false)}
                    </Col>
                    <Col sm="3">
                        {defCard(t("def8.title"), t("def8.content"), t("linkText"), "def8", "kid_drums.jpg", false)}
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Definitions;
