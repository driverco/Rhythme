import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function imagePart(type, img) {
    return (
        <div className={"col-lg-6 order-lg-" + (type === "0" ? "2" : "1")}>
            <div className="p-5">
                <img className={"img-fluid "+(type === "3" ? "" : "rounded-circle")} src={"images/" + img} alt="" />
            </div>
        </div>
    );
}
function textPart(type, title, content, link, linkText) {
    return (
        <div className={"col-lg-6 order-lg-" + (type === "0" ? "1" : "2")}>
            <div className="p-1">
                <h2 className="display-4">{title}</h2>
                <p>{
                    content.map((cont, index) => {
                        return (
                            <Row key={"content" + index} ><Col>{cont}</Col></Row>
                        );
                    })
                }
                </p>
                <NavLink to={"./"+link} id={link} className="navLink">{linkText}</NavLink>
            </div>
        </div>

    );
}


function Section(type, title, content, img, link, linkText) {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                
                    {imagePart(type, img)}
                    {textPart(type, title, content, link, linkText)}
                </div>
            </div>
        </section>
    );
}

export default Section;
