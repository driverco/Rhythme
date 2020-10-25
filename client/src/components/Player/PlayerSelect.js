import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "reactstrap";
import pageHeader from "../common/PageHeader";
import defCard from "../common/DefCard";
import PlayerImg from "../../img/player.png";
import DocsImg from "../../img/Docs.png";

function PlayerSelect() {
    const { t } = useTranslation("player");
    return (
        <React.Fragment>
            {pageHeader(t("playerSelect.title"), t("playerSelect.subtitle"))}
            <Container fluid={false}>
                <Row>
                    <Col sm="3">
                        {defCard(t("playerSelect.practice"), t("playerSelect.practiceContent"), t("playerSelect.practice"), "practice", PlayerImg, false)}
                    </Col>
                    <Col sm="3">
                        {defCard(t("manualCard.title"), t("manualCard.content"), t("manualCard.linktext"), "userManual", DocsImg, false)}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default PlayerSelect;
