import React from "react";
import { useTranslation } from "react-i18next";
import section from "../common/Section";
import pageHeader from "../common/PageHeader";

function KeyboardMultipad() {
    const { t } = useTranslation("multipad");
    return (
        <React.Fragment>
            {pageHeader(t("keyboard.title"), t("keyboard.content"))}
            {section("0", t("keyboard.cautionTitle"), [t("keyboard.caution")], "alert.jpg")}
            {section("3", t("keyboard.materialsTitle"), [t("keyboard.materials1"), t("keyboard.materials2"), t("keyboard.materials3"), t("keyboard.materials4")], "KeyboardMaterials.png", "", "", false, true)}
            {section("3", t("keyboard.step1Title"), [t("keyboard.step1")], "KeyboardStep1.png", "", "", false, true)}
            {section("3", t("keyboard.step2Title"), [t("keyboard.step2")], "KeyboardStep2.png", "", "", false, true)}
            {section("3", t("keyboard.step3Title"), [t("keyboard.step3")], "KeyboardStep3.png", "", "", false, true)}
            {section("3", t("keyboard.step4Title"), [t("keyboard.step4")], "KeyboardStep4.png", "", "", false, true)}
            {section("3", t("keyboard.finalTitle"), [t("keyboard.final")], "keyboardMultipadFinalLarge.png", "", "", false, true)}
        </React.Fragment>
    );
}

export default KeyboardMultipad;
