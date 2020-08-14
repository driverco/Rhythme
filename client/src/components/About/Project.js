import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";

function Project() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            {PageHeader(t("project.title"), t("project.content"))}
              descripcion Proyecto
        </React.Fragment>
    );
}

export default Project;
