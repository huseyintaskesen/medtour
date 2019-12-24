import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import "./about.css";

class About extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <div className="about w3-animate-opacity">
                    <h3>About</h3>
                    <p>
                        {/* &emsp returns a tab. */}
                        &emsp;Found by a group of computer engineering students
                        at Bilkent University in 2019. Group members are Asaf
                        Kağan Bezgin, Hüseyin Taşkesen, Akant Atılgan & Skerd
                        Xhafa.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
