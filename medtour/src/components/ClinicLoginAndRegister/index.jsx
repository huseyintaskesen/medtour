import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import "./clinic-login-and-register.css";
import axios from "axios";



var clinic = {}

class ClinicLoginAndRegister extends Component {
    constructor() {
        super();
        this.name_input = React.createRef();
        this.password_input = React.createRef();
        this.email_input = React.createRef();
        this.login_email = React.createRef();
        this.login_password = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    async handleSubmit(event) {
        console.log("A name was submitted: " + this.name_input.current.value);
        event.preventDefault();

        var name = this.name_input.current.value;
        var password = this.password_input.current.value;
        var email = this.email_input.current.value;

        clinic = await this.registerClinic(name, password, email);
        console.log("Clinic object:"+ clinic)
        console.log("Clinic name:"+ clinic.clinic.name)
        console.log("Clinic email:"+ clinic.clinic.email)
        // window.open('http://localhost:3000/landing', "_self")
    }
    async handleLogin(event) {
        event.preventDefault();
        var email = this.login_email.current.value;
        var password  = this.login_password.current.value;
        
        



    }

    async registerClinic(name, password, email) {
        const body = JSON.stringify({
            name,
            password,
            email
        });
        console.log(body);
        //Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };
        //Request body
       var resp = await axios.post("/api/clinics/newClinic", body, config).then((res) => {
            console.log("response:"+res.data)
            console.log('clinic id:'+ res.data.clinic.id)
            return res.data
        }).catch(err => {
        
        console.log('error returned:'+err)
        })
        return resp
        
    }

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
                                                ref={this.login_email}
                                                type="email"
                                                className="form-control"
                                                placeholder="enter registered clinic email"
                                            ></input>
                                            <label>Password</label>
                                            <input
                                                ref={this.login_password}
                                                type="password"
                                                className="form-control"
                                                placeholder="enter password"
                                            ></input>
                                        </div>
                                    </form>
                                    <div className="col-12 text-center pt-4">
                                        <button className="btn btn-primary" type="submit" onClick={this.handleLogin}>
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
                                                ref={this.name_input}
                                            ></input>
                                            <label>Clinic Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="enter an email"
                                                ref={this.email_input}
                                            ></input>
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="chose a password"
                                                ref={this.password_input}
                                            ></input>
                                        </div>
                                    </form>
                                    <div className="col-12 text-center pt-4">
                                        <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>
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
