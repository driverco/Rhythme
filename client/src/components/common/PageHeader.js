import React from "react";
import "./PageHeader.css";

function pageHeader(header, subheader) {
    return (
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container">
                    <h1 className="masthead-heading mb-0">{header}</h1>
                    <h2 className="masthead-subheading mb-0">{subheader}</h2>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
    );
}


export default pageHeader;
