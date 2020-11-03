import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import pageHeader from "../common/PageHeader";

function Project() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            {pageHeader(t("project.title"), t("project.content"))}
            <Container>
            <Row>
                    <Col sm="12" >
                       <p> {t("projectDesc1")}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" >
                        <p>{t("projectDesc2")}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" >
                        <p>{t("projectDesc3")}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" >
                        <p>{t("projectDesc4")}</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Project;
