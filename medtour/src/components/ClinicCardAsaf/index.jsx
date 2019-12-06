import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./clinic-card.css";

class ClinicCard extends Component {
    render() {
        return (
            <div className="page">
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                ></link>
                <div
                    class="card border-primary clinic-card"
                    style={{ width: "60rem" }}
                >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img
                                src={require("../../assets/clinic-default.jpg")}
                                class="card-img"
                                alt="clinic default"
                            />
                        </div>
                        <div className="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Clinic Name</h5>
                                <p class="card-text">
                                    Explanation about the clinics. Could be
                                    brief or long. It is best to keep it simple.
                                    This is just to fill the card. We have the
                                    best treatments. We have great doctors. For
                                    more information please visit our detailed
                                    clinic page. It would be a more detailed
                                    page if you want to be informed more about
                                    the treatments and the operators.
                                </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                </li>
                                <li class="list-group-item">
                                    <ul className="list-unstyled clinic-treatments">
                                        <li>Treatment 1</li>
                                        <li>Treatment 2</li>
                                        <li>Treatment 3</li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">
                                    Enquire
                                </a>
                                <a href="#" class="card-link">
                                    Detailed Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClinicCard;
