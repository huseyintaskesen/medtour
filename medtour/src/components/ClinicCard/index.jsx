import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./clinic-card.css";
import { Link } from "react-router-dom";


export default function ClinicCardAsaf(props) {
    const treatment_details = props.treatments.map(treatment => {
        return (
            <div>
                <li>{treatment["name"]}: {treatment["priceLow"]} - {treatment["priceHigh"]} {treatment["currency"]} </li>
            </div>
        );
    });

    
    const clinic_id  = props.clinic_id
    const treatments = props.treatments
    return (
        <div className="page">
            <b>{clinic_id}</b>

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
                            <b>About Clinic:</b>
                            <p className="card-text">{props.bio}</p>
                            <b>Address:</b>
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
                            <Link to={{
                                        pathname: "/clinicdetails",
                                         data: props
                                    }}
                                    className="card-link">
                                Detailed Info
                            </Link>
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
