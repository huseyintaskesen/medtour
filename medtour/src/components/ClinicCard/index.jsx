import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./clinic-card.css";

export default function ClinicCardAsaf(props) {
    const treatment_details = props.treatments.map(treatment => {
        return (
            <div>
                <li>{treatment["treatment_name"]}</li>
            </div>
        );
    });

    return (
        <div className="page">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <div
                className="card border-primary clinic-card"
                style={{ width: "60rem" }}
            >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src={props.avatar}
                            className="card-img"
                            alt="clinic default"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.location}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </li>
                            <li className="list-group-item">
                                <ul className="list-unstyled clinic-treatments">
                                    {treatment_details}
                                </ul>
                            </li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">
                                Enquire
                            </a>
                            <a href="#" className="card-link">
                                Detailed Info
                            </a>
                            <button className="btn btn-success">
                                Make a Reservation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
