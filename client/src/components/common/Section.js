import React, { Component } from "react";
import PropTypes from "prop-types";

class Section extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        {this.imagePart(this.props.type, this.props.img)}
                        {this.textPart(this.props.type, this.props.title, this.props.content)}
                    </div>
                </div>
            </section>
        );
    }

    imagePart(type, img) {
        return (
            <div className={"col-lg-6 order-lg-" + (type === "0" ? "2" : "1")}>
                <div className="p-5">
                    <img className="img-fluid rounded-circle" src={"images/" + img} alt="" />
                </div>
            </div>
        );
    }
    textPart(type, title, content) {
        return (
            <div className={"col-lg-6 order-lg-" + (type === "0" ? "1" : "2")}>
                <div className="p-1">
                    <h2 className="display-4">{title}</h2>
                    <p>{content}</p>
                </div>
            </div>

        );
    }

}

Section.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default Section;
