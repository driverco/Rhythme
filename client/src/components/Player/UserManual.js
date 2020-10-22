import React from "react";
import { useTranslation } from "react-i18next";
import pageHeader from "../common/PageHeader";

function UserManual() {
    const { t } = useTranslation("player");
    return (
        <React.Fragment>
            {pageHeader(t("manual.title"), t("manual.subtitle"))}
              Manual de usuario
        </React.Fragment>
    );
}

export default UserManual;
