import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import "./signUp.css";
import axios from "axios";

class SignUp extends Component {
    constructor() {
        super();
        this.name_input = React.createRef();
        this.surname_input = React.createRef();
        this.password_input = React.createRef();
        this.email_input = React.createRef();
        this.username_input = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("A name was submitted: " + this.name_input.current.value);
        event.preventDefault();

        var name = this.name_input.current.value;
        var surname = this.surname_input.current.value;
        var password = this.password_input.current.value;
        var userName = this.username_input.current.value;
        var email = this.email_input.current.value;

        this.registerUser(name, surname, password, userName, email);
    }

    registerUser(name, surname, password, userName, email) {
        const body = JSON.stringify({
            name,
            surname,
            userName,
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
        axios.post("/api/users", body, config).then(res => ({
            payload: res.data,
        }));
        
    }

    render() {
        return (
            <div>
                <LandingNav />
                <div className="container-fluid">
                    <div className="col-sm-12 col-md-6 offset-sm-0 offset-md-3 w3-animate-opacity bg-white signUp">
                        <div className="row justify-content-center">
                            <h3 className="singupText">SignUp</h3>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group singUp">
                                        <label>Name</label>
                                        <input
                                            ref={this.name_input}
                                            type="text"
                                            className="form-control"
                                            id="left"
                                            placeholder="name"
                                        ></input>
                                        <label>Surname</label>
                                        <input
                                            ref={this.surname_input}
                                            type="text"
                                            className="form-control"
                                            id="left"
                                            placeholder="surname"
                                        ></input>
                                        <label>E-Mail</label>
                                        <input
                                            ref={this.email_input}
                                            type="email"
                                            className="form-control"
                                            id="left"
                                            placeholder="email"
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group singUp">
                                        <label>Password</label>
                                        <input
                                            ref={this.password_input}
                                            type="password"
                                            className="form-control"
                                            id="right"
                                            placeholder="password"
                                        ></input>
                                        <label>Re-Enter Your Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="right"
                                            placeholder="password"
                                        ></input>
                                        <label>Username</label>
                                        <input
                                            ref={this.username_input}
                                            type="text"
                                            className="form-control"
                                            id="left"
                                            placeholder="surname"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row justify-content-center">
                            <button
                                onClick={this.handleSubmit}
                                type="submit"
                                className="btn btn-primary mt-4"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
