import React from "react";
import { useTranslation } from "react-i18next";
import pageHeader from "../common/PageHeader";


function multipad() {
    const { t } = useTranslation("multipad");
    return (
        <React.Fragment>
            {pageHeader(t("welcomeTitle"), t("welcomeSubtitle"))}
            asdfasdfasdf
        </React.Fragment>
    );
}

export default multipad;
