import React from "react";
/*import { useTranslation } from "react-i18next";*/
import { ButtonGroup, Button, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faFastBackward, faList } from '@fortawesome/free-solid-svg-icons'


function Controller() {
    /* const { t } = useTranslation("player");*/
    return (
        <React.Fragment>
            <ButtonGroup size="lg">
                <Button>
                    <FontAwesomeIcon icon={faFastBackward} />
                </Button>
                <Button>
                    <FontAwesomeIcon icon={faPlay} />
                    <FontAwesomeIcon icon={faPause} />
                </Button>
                <InputGroup size="lg">
                    <Input placeholder="Speed" min={20} max={300} type="number" step="1" bsSize="lg" defaultValue={20} />
                    <InputGroupAddon addonType="append">BPM</InputGroupAddon>
                </InputGroup>
                <InputGroup size="lg">
                    <InputGroupAddon addonType="append">Pattern</InputGroupAddon>
                    <Input placeholder="Pattern" type="string" bsSize="lg" disabled defaultValue="rock" />
                </InputGroup>
                <Button>
                    <FontAwesomeIcon icon={faList} />
                </Button>
            </ButtonGroup>
        </React.Fragment>
    );
}

export default Controller;
