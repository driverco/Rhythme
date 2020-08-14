import React from "react";

function Section(type, title, content, img) {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                    {imagePart(type, img)}
                    {textPart(type, title, content)}
                </div>
            </div>
        </section>
    );
}
function imagePart(type, img) {
    return (
        <div className={"col-lg-6 order-lg-" + (type === "0" ? "2" : "1")}>
            <div className="p-5">
                <img className="img-fluid rounded-circle" src={"images/" + img} alt="" />
            </div>
        </div>
    );
}
function textPart(type, title, content) {
    return (
        <div className={"col-lg-6 order-lg-" + (type === "0" ? "1" : "2")}>
            <div className="p-1">
                <h2 className="display-4">{title}</h2>
                <p>{content}</p>
            </div>
        </div>

    );
}

export default Section;
