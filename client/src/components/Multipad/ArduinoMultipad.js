import React from "react";
import { useTranslation } from "react-i18next";
import section from "../common/Section";
import pageHeader from "../common/PageHeader";

function ArduinoMultipad() {
    const { t } = useTranslation("multipad");
    return (
        <React.Fragment>
            {pageHeader(t("arduino.title"), t("arduino.content"))}
            {section("0", t("arduino.cautionTitle"), [t("arduino.caution")], "alert.jpg", "keyboardMultipad", "keyboardMultipad")}
            {section("3", t("arduino.materialsTitle"), [t("arduino.materials1"),t("arduino.materials2"),t("arduino.materials3"),t("arduino.materials4"),t("arduino.materials5"),t("arduino.materials6"),t("arduino.materials7")], "arduinoMaterials.png")}
            {section("3", t("arduino.diagramTitle"), [t("arduino.diagram")], "arduinoMultipadDiagram.png")}
            {section("3", t("arduino.step1Title"), [t("arduino.step1")], "arduinoStep1.png")}
            {section("3", t("arduino.step2Title"), [t("arduino.step2")], "arduinoStep2.png")}
            {section("3", t("arduino.step3Title"), [t("arduino.step3")], "arduinoStep3.png")}
            {section("3", t("arduino.step4Title"), [t("arduino.step4")], "arduinoStep4.png")}
            {section("3", t("arduino.finalTitle"), [t("arduino.final")], "arduinoMultipadFinalLarge.png")}
        </React.Fragment>
    );
}

export default ArduinoMultipad;
