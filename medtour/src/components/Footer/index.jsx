import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-left">
                    <p id="footer-left-info">
                        Bilkent University <br />
                        <br /> Computer Engineering <br />
                        <br /> CS492 Senior Design Project
                    </p>
                </div>
                <div className="footer-right">
                    <p id="footer-right-info">Follow us on social media</p>
                    <img
                        id="facebook"
                        src={require("../../assets/icons8-facebook-50-white.png")}
                        alt="facebook"
                    ></img>
                    <img
                        id="instagram"
                        src={require("../../assets/icons8-instagram-50-white.png")}
                        alt="facebook"
                    ></img>
                    <img
                        id="twitter"
                        src={require("../../assets/icons8-twitter-50-white.png")}
                        alt="facebook"
                    ></img>
                </div>
            </div>
        );
    }
}

export default Footer;
