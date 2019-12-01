import React from 'react'
import styles from "./Styles//clinicCardStyle.css";
import ClinicCardTreatments from "./ClinicCardTreatments"
import ClinicCardImageAndRating from "./ClinicCardImageAndRating"
import ClinicReview from "./ClinicReview"

export default function ClinicCardComponent (props) {
    const treatment_details = props.treatments.map((treatment)=> {
    return(
        <div>
            <ClinicCardTreatments treatment_price={treatment['treatment_price']} treatment_name={treatment['treatment_name']}></ClinicCardTreatments>
        </div>
    )
    })
        return (
        
            <div class="card">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-8 mx-0 px-0 my-0 py-0">
                                <div class="col-12">
                                    <div class="row col-12 " >
                                        <h4 class="underlineIt my-0 py-0 "> {props.name}</h4>
                                        
                                        <div class="col-12 text-muted">
                                            <div class="row"> 
                                                <div class='image addressIcon borderIt'> 
                                                    <img src=""></img>
                                                </div>
                                                <h5>{props.address}</h5>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <hr class=" mx-0 px-0 my-0 py-0"></hr>
                                <div class="col-12"> 
                                    {treatment_details}

                                </div>
                                <hr></hr>
                                <div class="col-12 align-bottom">
                                    <ClinicReview review_description={props.review.description} review_title={props.review.title} review_date={props.review.date} review_stars={props.review.stars} review_author={props.review.author}> </ClinicReview>
                                    <div class=" underlineIt text-right text-muted">
                                    <div class="col-7" style={{marginTop:'20px'}}>
                                     <button class="btn btn-success py-0"> Contact</button>    
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 borderLeft">
                                <ClinicCardImageAndRating rating={props.rating} avatar={props.avatar}> </ClinicCardImageAndRating>
                            </div>
                            
                        </div>
                    </div>

                </div>
            
        );

}
        
