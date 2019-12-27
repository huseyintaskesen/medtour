import React from "react";
import "./clinic-card.css";
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';


export default function ClinicCardAsaf(props) {
    var treatmentLimit = 2;
    const treatment_details = props.treatments.map(treatment => {
        if( treatmentLimit>0){
            treatmentLimit--;
            return (
                <div>
                    <li>{treatment["name"]}: {treatment["priceLow"]} - {treatment["priceHigh"]} {treatment["currency"]} </li>
                </div>
            );
        }
        else if( treatmentLimit == 0 ){
            return(
                <div>
                    <Link to={{ pathname: "/clinicdetails", data: props }} className="card-link">
                        View More
                    </Link>
                </div>
            )
        }
        else{
            return(<div></div>);
        }

        
    });

    var bio = props.bio + "";
    var bioLength = 150;
    if( bio.length > bioLength){
        bio = bio.substring(0,bioLength) + "...";
    }
    
    const clinic_id  = props.clinic_id
    const avatar = props.avatar;
    const name = props.name;
    const ratingAverage = props.ratingAverage;
    const location = props.location;

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
                            src={avatar}
                            className="card-img"
                            alt="clinic default"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body pb-1">

                            <div class="row">
                                <h5 className="card-title pb-0">{name}</h5> &nbsp;&nbsp;&nbsp;
                                <StarRatings
                                    rating={ ratingAverage}
                                    starRatedColor="red"
                                    numberOfStars={5}
                                    starDimension="20px"
                                    starSpacing="2px"
                                    name='rating'
                                />
                            </div>

                            <ul className="list-group list-group-flush">

                                <li className="list-group-item">
                                    <b>About Clinic:</b>
                                    <ul className="list-unstyled clinic-treatments">
                                        {bio}
                                    </ul>
                                </li>

                                <li className="list-group-item">
                                    <b>Address:</b>
                                    <ul className="list-unstyled clinic-treatments">
                                    {location}
                                    </ul>
                                </li>

                                <li className="list-group-item">
                                    <b>Treatments:</b>
                                    <ul className="list-unstyled clinic-treatments">
                                        {treatment_details}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="card-body pt-0">
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

                            
                        </div>
                   
                    </div>
                </div>
            </div>
        </div>
    );
}
