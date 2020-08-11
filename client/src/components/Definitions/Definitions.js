import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";
import DefCard from "../common/DefCard";
import { Row, Col, Container } from "reactstrap";
import Beat from "../../img/life-rhythm.jpg";
import BPM from "../../img/Música-bpm.png";
import TimeSignatures from "../../img/TimeSignatures-main_Full.jpg";
import Accent from "../../img/Acento.jpg";





function Definitions() {
    const { t } = useTranslation("definitions");
    return (
        <React.Fragment>
            <PageHeader header={t("welcomeTitle")} subheader={t("welcomeSubtitle")} />
            <Container fluid={false}>
                <Row>
                    <Col sm="3">
                        <DefCard title={t("def1.title")} content={t("def1.content")} linkText={t("linkText")} linkTo="def1" img={Beat} />
                    </Col>
                    <Col sm="3">
                        <DefCard title={t("def2.title")} content={t("def2.content")} linkText={t("linkText")} linkTo="def2" img={BPM} />
                    </Col>
                    <Col sm="3">
                        <DefCard title={t("def3.title")} content={t("def3.content")} linkText={t("linkText")} linkTo="def3" img={TimeSignatures} />
                    </Col>
                    <Col sm="3">
                        <DefCard title={t("def4.title")} content={t("def4.content")} linkText={t("linkText")} linkTo="def4" img={Accent} />
                    </Col>
                </Row>
                <Row>
                    <Col sm="3">
                        <DefCard title={t("def5.title")} content={t("def5.content")} linkText={t("linkText")} linkTo="def5" img="kid_drums.jpg" />
                    </Col>
                    <Col sm="3">
                        <DefCard title={t("def6.title")} content={t("def6.content")} linkText={t("linkText")} linkTo="def6" img="kid_drums.jpg" />
                    </Col>
                    <Col sm="3">
                        <DefCard title={t("def7.title")} content={t("def7.content")} linkText={t("linkText")} linkTo="def7" img="kid_drums.jpg" />
                    </Col>
                    <Col sm="3">
                        <DefCard title={t("def8.title")} content={t("def8.content")} linkText={t("linkText")} linkTo="def8" img="kid_drums.jpg" />
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Definitions;
