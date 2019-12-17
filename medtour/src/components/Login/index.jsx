import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import "./login.css";
import axios from "axios";


class Login extends Component {
    constructor() {
        super();
        this.email_input = React.createRef();
        this.password_input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("A email was submitted: " + this.email_input.current.value);
        event.preventDefault();
        var email = this.email_input.current.value;
        var password = this.password_input.current.value;

       this.userLogin(email, password);
    }

    userLogin(email, password) {
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
        axios.post("/api/auth", body, config).then(res => ({
            payload: res.data,
        })).catch(err => {
            console.log(err)
        });
        console.log('user logged in')
        
    }




    render() {
        return (
            <div>
                <LandingNav />
                <div className="login w3-animate-opacity">
                    <h3>Login</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="inputUsernameOrEmail">
                                Email
                            </label>
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
                        <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
