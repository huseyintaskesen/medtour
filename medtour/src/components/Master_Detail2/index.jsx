import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "./master-detail-2.css";

export default class Master_Detail2 extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="heading">
                    <h4 className="display-4">
                        Find the best treatment in Turkey.
                    </h4>
                </div>
                <div className="input">
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
                    <button className="btn btn-primary">
                        <img
                            alt="doctor-icon"
                        ></img>
                        &nbsp;&nbsp;&nbsp;&nbsp; Contracted Doctors
                    </button>
                    <button className="btn btn-primary">
                        <img
                            
                            alt="clinic-icon"
                        ></img>
                        &nbsp;&nbsp;&nbsp;&nbsp; Explore Clinics
                    </button>
                    <button className="btn btn-primary">
                        <img
                            alt="flight-icon"
                        ></img>
                        &nbsp;&nbsp;&nbsp;&nbsp; Look up for Flights
                    </button>
                    <button className="btn btn-primary">
                        <img
                            alt="accomodation-icon"
                        ></img>
                        &nbsp;&nbsp;&nbsp;&nbsp; Find the best places to stay
                    </button>
                </div>
            </div>
        );
    }
  }
