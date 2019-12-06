import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./clinic-card.css";

export default function ClinicCardAsaf(props)  {
    const treatment_details = props.treatments.map((treatment)=> {
        return(
            <div>
                <li>
                {treatment['treatment_name']} 
                </li>
             </div>
        )
        })

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
                                src={props.avatar}
                                class="card-img"
                                alt="clinic default"
                            />
                        </div>
                        <div className="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{props.name}</h5>
                                <p class="card-text">
                                    {props.location}
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
                                        {treatment_details}
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

