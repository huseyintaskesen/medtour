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
                <div className="container-fluid">
                    <div className="col-6 offset-3 w3-animate-opacity bg-white top">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="text-center txt-color">
                                    Clinic Login
                                </h3>
                                <div className="row">
                                    <form className="col-12">
                                        <div
                                            className="form-group"
                                            id="clinic-login"
                                        >
                                            <label>Clinic Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="enter registered clinic email"
                                            ></input>
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="enter password"
                                            ></input>
                                        </div>
                                    </form>
                                    <div className="col-12 text-center pt-4">
                                        <button className="btn btn-primary">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <h3 className="text-center txt-color">
                                    Clinic Register
                                </h3>
                                <div className="row">
                                    <form className="col-12">
                                        <div
                                            className="form-group"
                                            id="clinic-register"
                                        >
                                            <label>Clinic Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="enter your clinic name"
                                            ></input>
                                            <label>Clinic Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="enter an email"
                                            ></input>
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="chose a password"
                                            ></input>
                                        </div>
                                    </form>
                                    <div className="col-12 text-center pt-4">
                                        <button className="btn btn-primary">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClinicLoginAndRegister;
