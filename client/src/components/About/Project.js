import React from "react";
import { useTranslation } from "react-i18next";
import pageHeader from "../common/PageHeader";

function project() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            {pageHeader(t("project.title"), t("project.content"))}
              descripcion Proyecto
        </React.Fragment>
    );
}

export default project;
