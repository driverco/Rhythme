import React from 'react';
import { useTranslation } from "react-i18next";
import PageHeader from '../common/PageHeader';


function Home() {
    const { t } = useTranslation("home");
    return (
        <React.Fragment>
            <PageHeader header={t("welcomeTitle")} subheader= {t("welcomeSubtitle")}/>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src="images/kid_drums.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">For those about to rock...</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;
