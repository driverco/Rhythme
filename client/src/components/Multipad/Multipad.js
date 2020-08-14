import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";


function Multipad() {
    const { t } = useTranslation("multipad");
    return (
        <React.Fragment>
            {PageHeader(t("welcomeTitle"), t("welcomeSubtitle"))}
            asdfasdfasdf
        </React.Fragment>
    );
}

export default Multipad;
