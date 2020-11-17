import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ModalImage from "react-modal-image";

function imagePart(type, img, openImage) {

    return (
        <div className={"col-lg-6 order-lg-" + (type === "0" ? "2" : "1")}>
            <div className="p-5">
                {(openImage) ? <ModalImage className={"img-fluid " + (type === "3" ? "" : "rounded-circle")} small={"images/" +img} large={"images/" +img} alt={img}
                /> : <img className={"img-fluid " + (type === "3" ? "" : "rounded-circle")} src={"images/" + img} alt={img} />}
            </div>
        </div>
    );
}
function textPart(type, title, content, link, linkText, external) {
    return (
        <div className={"col-lg-6 order-lg-" + (type === "0" ? "1" : "2")}>
            <div className="p-1">
                <h2 className="display-4">{title}</h2>
                <div>{
                    content.map((cont, index) => {
                        return (
                            <Row key={"content" + index} ><Col>{cont}</Col></Row>
                        );
                    })
                }
                </div>
                {(!external) ? <NavLink to={"./" + link} id={link} className="navLink">{linkText}</NavLink> : <a download id={link} href={link} target="_blank" rel="noopener noreferrer" >{linkText}</a>}
            </div>
        </div>

    );
}


function Section(type, title, content, img, link, linkText, external, openImage) {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">

                    {imagePart(type, img, openImage)}
                    {textPart(type, title, content, link, linkText, external)}
                </div>
            </div>
        </section>
    );
}

export default Section;
