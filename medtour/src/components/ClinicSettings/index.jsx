import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import Footer from "../Footer";
import "./clinic-settings.css";
import MaterialTable from "./treatment-table";

class ClinicSettings extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <div className="container-fluid col-12 bg-white">
                    <div className="offset-1 col-10">
                        <div className="row pt-5 pl-3 pt-3 pb-3 borderDown">
                            <h4>Clinic Settings</h4>
                        </div>
                        <div className="row clinic-settings">
                            <div className="col-6">
                                <div className="row">
                                    <form>
                                        <div class="form-group">
                                            <label for="input-field">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                            />
                                            <label for="input-field">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                            />
                                            <label for="input-field">
                                                Type
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <form>
                                        <div class="form-group">
                                            <label for="input-field">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                            />
                                            <label for="input-field">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                            />
                                            <label for="input-field">Bio</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        <div className="row pt-3 pl-3 pb-3">
                            <h5>Treatments</h5>
                        </div>
                        <div className="row pb-5">
                            <link
                                rel="stylesheet"
                                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                            />
                            <MaterialTable />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ClinicSettings;
