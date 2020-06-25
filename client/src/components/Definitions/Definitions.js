import React from 'react';
import { useTranslation } from "react-i18next";
import PageHeader from '../common/PageHeader';



function Definitions () {
    const { t } = useTranslation("definitions");
        return (
            <React.Fragment>
             <PageHeader header={t("welcomeTitle")} subheader= {t("welcomeSubtitle")}/>
            </React.Fragment>
        );
}

export default Definitions;
