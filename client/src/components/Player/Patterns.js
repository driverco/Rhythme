import React from "react";
import { useTranslation } from "react-i18next";
import { ListGroup, ListGroupItem, Row, Col, Badge, Card, CardTitle, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Patterns.css";
import patternsData from "../../json/patterns.json";
import { setPattern, setPatternDisplay } from "../../redux/actions/ControllerActions";
function Patterns() {
    const patternDisplay = useSelector(Store => Store.ControllerReducer.patternDisplay);
    const dispatch = useDispatch();
    const { t } = useTranslation("player");

    return (
        <div className="PatternBox">
            <Row>
                <Col>
                    {t("pattern.select")}
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className="PatternList">
                        {patternsData.map((patternData) => {
                            return (
                                <ListGroupItem key={patternData.name} className="PatternList" onClick={() => dispatch(setPatternDisplay(patternData))}>
                                    {patternData.name}&nbsp;{"(" + patternData.timeSignaure + ")"}&nbsp;{patternData.bpm + " BPM"}&nbsp;
                                    {getNumberInstrBadge(patternData.numberInstr)}&nbsp;
                                    {getDifficultyBadge(patternData.difficulty, t)}&nbsp;
                                </ListGroupItem>);
                        })}
                    </ListGroup>
                </Col>
                <Col>
                    {getPatternCard(patternDisplay, t, dispatch)}
                </Col>
            </Row>
        </div >
    );
}
function getDifficultyColor(difficulty) {
    switch (difficulty) {
        case "easy": return ("success");
        case "medium": return ("primary");
        case "hard": return ("danger");
        default: return ("none");
    }
}
function getPatternLinePrev(patternCode) {
    const items = [];

    for (var i = 0; i < patternCode.length; i++) {
        if (patternCode.charAt(i) === "0") {
            items.push( <div key={"patt"+i} className="prevBeat prevOff"></div>);
        } else {
            items.push( <div key={"patt"+i} className="prevBeat prevOn"></div>);
        }
    }
    return (<React.Fragment>{items}</React.Fragment>);
}


function getNumberInstrBadge(numberInstr) {
    return (<Badge color="secondary" className="PatternBadge">{numberInstr}</Badge>);
}
function getDifficultyBadge(difficulty, t) {
    const colorBadge = getDifficultyColor(difficulty);
    return (<Badge color={colorBadge} className="PatternBadge">{t(difficulty)}</Badge>);
}
function getPatternCard(pattern, t, dispatch) {
    const colorCard = getDifficultyColor(pattern.difficulty);
    return (
        <Card body inverse color={colorCard} className="PatternCard">
            <CardTitle>{pattern.name}</CardTitle>
            <Row>{t("difficulty") + ": " + t(pattern.difficulty)}</Row>
            <Row>{t("speed") + ": " + t(pattern.bpm) + " BPM"}</Row>
            <Row>{t("timeSignaure") + ": " + t(pattern.timeSignaure)}</Row>
            <Row>{t("numberofinstruments") + ": " + t(pattern.numberInstr)}</Row>
            {pattern.instruments.map((instrument) => {
                return (
                    <Row key={instrument.type} ><Col>{t(instrument.type) + ": "}</Col><Col>{getPatternLinePrev(instrument.patternCode)}</Col></Row>
                )
            })}

            <Button color="secondary" onClick={() => dispatch(setPattern(pattern))}>{t("loadPattern")}</Button>
        </Card>);
}


export default Patterns;
