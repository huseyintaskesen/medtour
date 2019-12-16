import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import "./signUp.css";

class SignUp extends Component {

    // constructor(){
    //     super();
    //     this.handleClick = this.handleClick(bind);
    // }

    // handleClick() {
        
    // }






    render() {
        return (
            <div>
                <LandingNav />
                <div className="container-fluid">
                    <div className="col-sm-12 col-md-6 offset-sm-0 offset-md-3 w3-animate-opacity bg-white signUp">
                        <div className="row justify-content-center">
                            <h3 className="singupText">SignUp</h3>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group singUp">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="left"
                                            placeholder="name"
                                        ></input>
                                        <label>Surname</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="left"
                                            placeholder="surname"
                                        ></input>
                                        <label>E-Mail</label>
                                        <input
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
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row justify-content-center">
                            <button type="submit" className="btn btn-primary mt-4">
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
