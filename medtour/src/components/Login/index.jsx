import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import "./login.css";
import axios from "axios";
import cogoToast from "cogo-toast";

var islogin = {};

class Login extends Component {
    constructor() {
        super();
        this.email_input = React.createRef();
        this.password_input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        console.log("A email was submitted: " + this.email_input.current.value);
        event.preventDefault();
        var email = this.email_input.current.value;
        var password = this.password_input.current.value;

        islogin = await this.userLogin(email, password);
        console.log(islogin);
        if (islogin != undefined) {
            if (islogin.isLoginSuccessful) {
                var user_id = islogin.userr.id;
                localStorage.setItem("userID", user_id);
                const u_id = localStorage.getItem("userID");
                console.log("user id from session storage:" + u_id);
                cogoToast.success("Success!");
                setTimeout(function() {
                    window.open("http://localhost:3000/landing", "_self");
                }, 1000);
            }
        }
    }

    async userLogin(email, password) {
        const body = JSON.stringify({
            email,
            password
        });
        console.log(body);
        //Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };
        //Request body
        var resp = await axios
            .post("/api/auth/user", body, config)
            .then(res => {
                console.log("response:" + res.data.isLoginSuccessful);
                return res.data;
            })
            .catch(err => {
                cogoToast.error("Error in credentials!");
                console.log("error returned:" + err);
            });
        return resp;
    }

    render() {
        return (
            <div>
                <LandingNav />
                <div className="login w3-animate-opacity">
                    <h3>Login</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="inputUsernameOrEmail">Email</label>
                            <input
                                ref={this.email_input}
                                type="email"
                                className="form-control"
                                id="inputUsernameorEmail"
                                placeholder="Username or email"
                            ></input>
                            <label className="inputPassword">Password</label>
                            <input
                                ref={this.password_input}
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="password"
                            ></input>
                        </div>
                        <button
                            onClick={this.handleSubmit}
                            className="btn btn-primary"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
