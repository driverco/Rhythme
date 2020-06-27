import React, { Component } from "react";

class Section extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        {this.imagePart(this.props.type,this.props.img)}
                        {this.textPart(this.props.type, this.props.title)}
                    </div>
                </div>
            </section>
        );
    };

    imagePart(type, img) {
        return (
            <div className={"col-lg-6 order-lg-" + (type === "0" ? "2" : "1")}>
                <div className="p-5">
                    <img className="img-fluid rounded-circle" src={"images/"+img} alt="" />
                </div>
            </div>
        );
    }
    textPart(type, title) {
        return (
            <div className={"col-lg-6 order-lg-" + (type === "0" ? "1" : "2")}>
                <div className="p-5">
                    <h2 className="display-4">{title}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
            </div>

        );
    }

}

export default Section;
