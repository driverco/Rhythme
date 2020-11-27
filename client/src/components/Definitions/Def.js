import React from "react";
import { useTranslation } from "react-i18next";
import pageHeader from "../common/PageHeader";
import YouTube from "react-youtube";
import { Col, Container, Row } from "reactstrap";
import "./Def.css";

function Def(props) {
    const { t } = useTranslation("definitions");
    const def = props.match.params.id;
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        }
    };
    return (
        <React.Fragment>
            {pageHeader(t("def" + def + ".title"), t("def" + def + ".content"))}
            <Container>
                <Row>
                    <Col sm="12">
                        <YouTube videoId={t("def" + def + ".video")} opts={opts}  containerClassName="youtubeVideo" />
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        {t("def" + def + ".textdesc")}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Def;
