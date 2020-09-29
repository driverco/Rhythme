import React from "react";
import { useTranslation } from "react-i18next";
import { ListGroup, ListGroupItem, Row, Col, Badge, Card, CardTitle, Button, Collapse, CardLink, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./Patterns.css";
import patternsData from "../../json/patterns.json";
import { setPattern, setPatternDisplay, togglePatternEdit } from "../../redux/actions/ControllerActions";

function Patterns() {
    
    const patternDisplay = useSelector(Store => Store.ControllerReducer.patternDisplay);
    const patternEditOpen = useSelector(Store => Store.ControllerReducer.patternEditOpen);
    const dispatch = useDispatch();
    const { t } = useTranslation("player");
    const onChangeTimeSignature = (e) => {
        console.log(e.target.value);
        let pat = patternDisplay;
        pat.timeSignature = e.target.value
        dispatch(setPatternDisplay(pat)) 
    }

    return (
        <div className="PatternBox">
            <Row>
                <Col>
                    {t("pattern.select")}
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <Collapse isOpen={!patternEditOpen}>
                        <ListGroup className="PatternList" >
                            {patternsData.map((patternData) => {
                                return (
                                    <ListGroupItem key={patternData.name} className="PatternList" onClick={() => dispatch(setPatternDisplay(patternData))}>
                                        {patternData.name}&nbsp;{"(" + patternData.timeSignature + ")"}&nbsp;{patternData.bpm + " BPM"}&nbsp;
                                        {getNumberInstrBadge(patternData.instruments.length)}&nbsp;
                                        {getDifficultyBadge(patternData.difficulty, t)}&nbsp;
                                    </ListGroupItem>);
                            })}
                        </ListGroup>
                    </Collapse>
                    <Collapse isOpen={patternEditOpen}>
                        <Card body className="PatternEdit">
                            <CardTitle>{t("editPattern")}  </CardTitle>
                        </Card>
                    </Collapse>
                </Col>
                <Col xs="6">
                    <Collapse isOpen={true} >
                        {getPatternCard(patternDisplay, t, dispatch, patternEditOpen, onChangeTimeSignature, useSelector)}
                    </Collapse>
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
            items.push(<div key={"patt" + i} className="prevBeat prevOff"></div>);
        } else {
            items.push(<div key={"patt" + i} className="prevBeat prevOn"></div>);
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

function getPatternCard (patternDisplay, t, dispatch, patternEditOpen, onChangeTimeSignature){
    const colorCard = getDifficultyColor(patternDisplay.difficulty);
    return (
        <Card body inverse color={colorCard} className="PatternCard">
            <CardTitle><Row><Col xs="5">{patternDisplay.name}</Col>
                <Col className="text-right" xs="7" >
                    <CardLink href="#" className="EditPatternLink" onClick={() => editPattern(dispatch)}>{t("editPattern")}
                        <FontAwesomeIcon icon={faEdit} onClick={() => editPattern(dispatch)} />
                    </CardLink>
                </Col>
            </Row>
            </CardTitle>
            <Row>{t("difficulty") + ": " + t(patternDisplay.difficulty)}</Row>
            <Row>{t("speed") + ": " + patternDisplay.bpm + " BPM"}</Row>
            <Row>{t("timeSignaure") + ": "} <Input type="select" name="timeSignatureSelect" id="timeSignatureSelect" disabled={!patternEditOpen} value={patternDisplay.timeSignature} onChange={e => onChangeTimeSignature(e)}>
                <option>2/4</option>
                <option>3/4</option>
                <option>4/4</option>
            </Input>
            </Row>
            <Row>{t("numberofinstruments") + ": " + patternDisplay.instruments.length}</Row>
            {patternDisplay.instruments.map((instrument) => {
                return (
                    <Row key={instrument.type} ><Col>{t(instrument.type) + ": "}</Col><Col>{getPatternLinePrev(instrument.patternCode)}</Col></Row>
                )
            })}

            <Button color="secondary" onClick={() => { dispatch(setPattern(patternDisplay)); document.getElementById("bpm").value = patternDisplay.bpm }}>{t("loadPattern")}</Button>{' '}

        </Card>);
    function editPattern(dispatch) {
        dispatch(togglePatternEdit());
    }
}



export default Patterns;
