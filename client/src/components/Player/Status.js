import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Input } from "reactstrap";
import { useSelector } from "react-redux";
import { PLAYING, STOP, FINISHED } from "../../redux/actions/ControllerActions";

function getPlayingStateText(playingState, t) {
    switch (playingState){
        case PLAYING: return(t("status.playing"));
        case STOP: return(t("status.stopped"));
        case FINISHED: return(t("status.finish"));
        default: return(t("status.none"));
    }
}

function Status() {
    const bpm = useSelector((Store) => Store.ControllerReducer.bpm);
    const playingState = useSelector((Store) => Store.ControllerReducer.playingState);
    const timeSignature = useSelector((Store) => Store.ControllerReducer.pattern.timeSignature);
    
    const { t } = useTranslation("player");
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Input readOnly={true} value={t("status.status") + ": " + getPlayingStateText(playingState, t)} bsSize="sm" />
                </Col>
                <Col>
                    <Input readOnly={true} value={t("status.speed") + ": " + bpm + " bpm"} bsSize="sm" />
                </Col>
                <Col>
                    <Input readOnly={true} value={t("status.timeSignature") + ": " + timeSignature } bsSize="sm" />
                </Col>
            </Row>

        </React.Fragment>
    );
}


export default Status;
