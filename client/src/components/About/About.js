import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "reactstrap";
import pageHeader from "../common/PageHeader";
import defCard from "../common/DefCard";
import ProjectImg from "../../img/Descripción-Rhythme.jpg";
import PosterImg from "../../img/Poster.jpg";
import TeamImg from "../../img/Team.jpg";

function about() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            {pageHeader(t("welcomeTitle"), t("welcomeSubtitle"))}
            <Container fluid={false}>
                <Row>
                    <Col sm="3">
                        {defCard(t("poster.title"), t("poster.content"), t("linkText"), "https://drincon28.github.io/Poster/", PosterImg, true)}
                    </Col>
                    <Col sm="3">
                        {defCard(t("project.title"), t("project.content"), t("linkText"), "project", ProjectImg, false)}
                    </Col>
                    <Col sm="3">
                        {defCard(t("team.title"), t("team.content"), t("linkText"), "team", TeamImg, false)}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default about;
