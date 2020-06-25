import React from 'react';
import { useTranslation } from "react-i18next";
import PageHeader from '../common/PageHeader';


function Multipad(){
    const { t } = useTranslation();
        return (
            <React.Fragment>
            <PageHeader header={t("multipad.welcomeTitle")} subheader= {t("multipad.welcomeSubtitle")}/>
           </React.Fragment>
        );
}

export default Multipad;
