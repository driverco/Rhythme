import React from "react";
import { useTranslation } from "react-i18next";
import section from "../common/Section";
import pageHeader from "../common/PageHeader";

function Team() {
    const { t } = useTranslation("multipad");
    return (
        <React.Fragment>
            {pageHeader(t("keyboard.title"), t("keyboard.content"))}
            {section("0", t("keyboard.precautionTitle"), [t("keyboard.precaution")], "alert.jpg")}
            {section("3", t("keyboard.materialsTitle"), [t("keyboard.materials1"),t("keyboard.materials2"),t("keyboard.materials3"),t("keyboard.materials4")], "keyboardMaterials.png")}
            {section("3", t("keyboard.step1Title"), [t("keyboard.step1")], "keyboardStep1.png")}
            {section("3", t("keyboard.step2Title"), [t("keyboard.step2")], "keyboardStep2.png")}
            {section("3", t("keyboard.step3Title"), [t("keyboard.step3")], "keyboardStep3.png")}
            {section("3", t("keyboard.step4Title"), [t("keyboard.step4")], "keyboardStep4.png")}
            {section("3", t("keyboard.finalTitle"), [t("keyboard.final")], "keyboardMultipadFinalLarge.png")}
        </React.Fragment>
    );
}

export default Team;
