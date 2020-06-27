import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";
import DefCard from "../common/DefCard";
import { Row, Col, Container } from "reactstrap";



function Definitions() {
    const { t } = useTranslation("definitions");
    return (
        <React.Fragment>
            <PageHeader header={t("welcomeTitle")} subheader={t("welcomeSubtitle")} />
            <Container fluid={false}>
                <Row   >
                    <Col sm="3">
                        <DefCard />
                    </Col>
                    <Col sm="3">
                        <DefCard />
                    </Col>
                    <Col sm="3">
                        <DefCard />
                    </Col>
                    <Col sm="3">
                        <DefCard />
                    </Col>
                </Row>
                <Row>
                    <Col sm="3">
                        <DefCard />
                    </Col>
                    <Col sm="3">
                        <DefCard />
                    </Col>
                    <Col sm="3">
                        <DefCard />
                    </Col>
                    <Col sm="3">
                        <DefCard />
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Definitions;
