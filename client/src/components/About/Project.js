import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../common/PageHeader";





function Project() {
    const { t } = useTranslation("about");
    return (
        <React.Fragment>
            <PageHeader header={t("project.title")} subheader={t("project.content")} />
            descripcion Proyecto
        </React.Fragment>
    );
}

export default Project;
