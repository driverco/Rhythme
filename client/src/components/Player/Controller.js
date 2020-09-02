import React from "react";
/*import { useTranslation } from "react-i18next";*/
import { ButtonGroup, Button, InputGroup, InputGroupAddon, Input, Collapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faFastBackward, faList } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { changeBPM, playPause, rewind, togllePatternView, PLAYING } from "../../redux/actions/ControllerActions";
import Patterns from "./Patterns";

function Controller() {
    const bpm = useSelector(Store => Store.ControllerReducer.bpm);
    const playingState = useSelector(Store => Store.ControllerReducer.playingState);
    const pattern = useSelector(Store => Store.ControllerReducer.pattern);
    const patternViewOpen = useSelector(Store => Store.ControllerReducer.patternViewOpen);
    const dispatch = useDispatch();
    /*const { t } = useTranslation("player");*/

    return (
        <React.Fragment>
            <ButtonGroup size="lg">
                <Button onClick={() => dispatch(rewind())}>
                    <FontAwesomeIcon icon={faFastBackward} />
                </Button>
                <Button onClick={() => dispatch(playPause())}>
                    {(playingState === PLAYING ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />)}
                </Button>
                <InputGroup size="lg">
                    <Input id="bpm" placeholder="Speed" min={20} max={300} type="number" step="1" bsSize="lg" defaultValue={bpm} onChange={(e) => dispatch(changeBPM(e.target.value))} />
                    <InputGroupAddon addonType="append">BPM</InputGroupAddon>
                </InputGroup>
                <InputGroup size="lg">
                    <Input placeholder="Pattern" type="string" bsSize="lg" disabled value={pattern.name} />
                </InputGroup>
                <Button onClick={() => dispatch(togllePatternView())}>
                    <FontAwesomeIcon icon={faList} />
                </Button>
            </ButtonGroup>
            <Collapse isOpen={patternViewOpen}>
                {Patterns()}
            </Collapse>
        </React.Fragment >
    );
}

export default Controller;
