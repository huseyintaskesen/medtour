import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import "./clinic-login-and-register.css";

class ClinicLoginAndRegister extends Component {
    render() {
        /* filling an array with 18 dummy values in order to use
        it later to print 18 <br /> values to dom. */
        var spaces = [];
        for (var i = 0; i < 23; i++) {
            spaces.push(i);
        }
        return (
            <div>
                <LandingNav />
                <div className="container-fluid vertical-center">
                    <div className="col-6 offset-3 bg-white">Hello</div>
                </div>
            </div>
        );
    }
}

export default ClinicLoginAndRegister;
