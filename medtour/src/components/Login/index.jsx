import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import "./login.css";

class Login extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <div className="login w3-animate-opacity">
                    <h3>Login</h3>
                    <form>
                        <div className="form-group">
                            <label for="inputUsernameOrEmail">
                                Username or Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputUsernameorEmail"
                                placeholder="Username or email"
                            ></input>
                            <label className="inputPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="password"
                            ></input>
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
