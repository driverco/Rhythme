import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonGroup, Button } from "reactstrap";


function Controller() {
    const { t } = useTranslation("player");
    return (
        <React.Fragment>
            <ButtonGroup size="lg">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>
        </React.Fragment>
    );
}

export default Controller;
