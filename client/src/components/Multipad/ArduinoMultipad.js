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
            {section("3", t("arduino.materialsTitle"), [t("arduino.materials1"), t("arduino.materials2"), t("arduino.materials3"), t("arduino.materials4"), t("arduino.materials5"), t("arduino.materials6"), t("arduino.materials7")], "arduinoMaterials.png"), "", "", false, true}
            {section("3", t("arduino.diagramTitle"), [t("arduino.diagram")], "arduinoMultipadDiagram.png", "", "", false, true)}
            {section("3", t("arduino.step1Title"), [t("arduino.step1")], "ArduinoStep1.png", "", "", false, true)}
            {section("3", t("arduino.step2Title"), [t("arduino.step2")], "ArduinoStep2.png", "", "", false, true)}
            {section("3", t("arduino.step3Title"), [t("arduino.step3")], "ArduinoStep3.png", "", "", false, true)}
            {section("3", t("arduino.step4Title"), [t("arduino.step4")], "ArduinoStep4.png", "", "", false, true)}
            {section("3", t("arduino.step5Title"), [t("arduino.step5")], "ArduinoStep5.png", "", "", false, true)}
            {section("3", t("arduino.step6Title"), [t("arduino.step6")], "ArduinoStep6.png", "", "", false, true)}
            {section("3", t("arduino.step7Title"), [t("arduino.step7")], "ArduinoStep7.png", "multipad/multipad.ino", "multipad.ino", true, true)}
            {section("3", t("arduino.finalTitle"), [t("arduino.final")], "arduinoMultipadFinalLarge.png", "", "", false, true)}
        </React.Fragment>
    );
}

export default ArduinoMultipad;
