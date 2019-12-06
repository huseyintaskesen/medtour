import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import LandingNav from "../LandingNav";
import Footer from "../Footer";
import "./landing.css";

class Landing extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <div className="landing-page">
                    <div className="heading">
                        <h4 className="display-4">
                            Find the best treatment in Turkey.
                        </h4>
                    </div>
                    <div className="input shadow">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="The treatment you are looking for?"
                                aria-label="The treatment you are looking for?"
                                aria-describedby="button-addon2"
                            ></input>
                            <div className="input-group-append">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    id="button-addon2"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary shadow">
                            <img
                                src={require("../../images/icons8-doctor-50-white.png")}
                                alt="doctor-icon"
                            ></img>
                            &nbsp;&nbsp;&nbsp;&nbsp; Contact Doctors
                        </button>
                        <Link to="/exploreClinics">
                            <button className="btn btn-primary shadow">
                                <img
                                    src={require("../../images/icons8-clinic-50-white.png")}
                                    alt="clinic-icon"
                                ></img>
                                &nbsp;&nbsp;&nbsp;&nbsp; Explore Clinics
                            </button>
                        </Link>
                        <button className="btn btn-primary shadow">
                            <img
                                src={require("../../images/icons8-plane-50-white.png")}
                                alt="flight-icon"
                            ></img>
                            &nbsp;&nbsp;&nbsp;&nbsp; Look up for Flights
                        </button>
                        <button className="btn btn-primary shadow">
                            <img
                                src={require("../../images/icons8-hotel-50-white.png")}
                                alt="accomodation-icon"
                            ></img>
                            &nbsp;&nbsp;&nbsp;&nbsp; Find the best places to
                            stay
                        </button>
                    </div>
                    <img
                        id="Istanbul"
                        src={require("../../images/istanbul_skyline.svg.png")}
                        alt="Istanbul"
                    ></img>
                    <div className="landing-second">
                        <div className="landing-second-left">
                            <h2>Why Turkey?</h2>
                            <p>
                                Turkey is a leading player in the medical
                                tourist/healthcare facilitation industry. <br />
                                It is increasingly emerging as the destination
                                of choice for a wide range of medical <br />
                                procedures.
                                <br />
                                <br />
                                Turkey's advantage in medical tourism is the
                                high number of accredited hospitals <br />
                                in ophthalmic surgeries, bariatric and metabolic
                                surgery, plastic surgery, transplantation <br />
                                oncologic treatments as well as its affordable
                                prices, high-quality service, and is a leading
                                tourism destination with historical, cultural
                                and natural attractions.
                            </p>
                        </div>
                        <div className="landing-second-right">
                            <img
                                src={require("../../images/countries.jpg")}
                                alt="countries"
                            ></img>
                        </div>
                    </div>
                    <div className="landing-third">
                        <h2>
                            Top cities in Turkey where you can find the best
                            treatment.
                        </h2>
                        <div className="landing-third-images">
                            <img
                                id="istanbul"
                                src={require("../../images/istanbul.jpg")}
                                alt="Istanbul"
                            ></img>
                            <img
                                id="izmir"
                                src={require("../../images/izmir.jpg")}
                                alt="Izmir"
                            ></img>
                            <img
                                id="ankara"
                                src={require("../../images/ankara.jpg")}
                                alt="Ankara"
                            ></img>
                        </div>
                        <div className="landing-third-picture-tags">
                            <h3 id="istanbul">Istanbul</h3>
                            <h3 id="izmir">Izmir</h3>
                            <h3 id="ankara">Ankara</h3>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Landing;
