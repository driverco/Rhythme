import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center py-3 ">
                        &copy; {new Date().getFullYear()} Copyright: <a href="http://www.uan.edu.co"> Universidad Antonio Nari&ntilde;o </a>
            </footer>
        );
    }
}

export default Footer;


