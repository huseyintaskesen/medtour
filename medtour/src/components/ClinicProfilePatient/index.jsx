import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import Tabs from "./tabs";
import Footer from "../Footer";
import "./clinic-profile-patient.css";

class ClinicProfilePatient extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <div className="container-fluid name bg-dark">
                    <div className="row">
                        <div className="col-6">
                            <h4>Clinic Name</h4>
                        </div>
                        <div className="col-6">
                            <h5>Adress</h5>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-white">
                    <div className="row">
                        <Tabs />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ClinicProfilePatient;
