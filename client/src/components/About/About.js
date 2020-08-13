import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "reactstrap";
import PageHeader from "../common/PageHeader";
import DefCard from "../common/DefCard";
import ProjectImg from "../../img/Descripción-Rhythme.jpg";
import PosterImg from "../../img/Poster.jpg";
import TeamImg from "../../img/Team.jpg";




function About() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            <PageHeader header={t("welcomeTitle")} subheader={t("welcomeSubtitle")} />
            <Container fluid={false}>
                <Row>
                    <Col sm="3">
                        <DefCard title={t("poster.title")} content={t("poster.content")} linkText={t("linkText")} linkTo="https://drincon28.github.io/Poster/" linkExternal={true} img={PosterImg} />
                    </Col>
                    <Col sm="3">
                        <DefCard title={t("project.title")} content={t("project.content")} linkText={t("linkText")} linkTo="project" img={ProjectImg} />
                    </Col>
                    <Col sm="3">
                        <DefCard title={t("team.title")} content={t("team.content")} linkText={t("linkText")} linkTo="team" img={TeamImg} />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default About;
