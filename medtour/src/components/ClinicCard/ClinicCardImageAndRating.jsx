import React from 'react'
import styles from "./Styles/clinicCardStyle.css"


export default function ClinicCardImageAndRating(props) {
    
        return (

            <div class="row">

                <div class="col-12">
                    <img class="w-100" src={props.avatar} alt="Logo" />
                </div>
                <hr></hr>
                <div class="col-12 bold  text-center">
                    <strong> Rating: {props.rating}/5 </strong>

                </div>

                <div class="col-12 bold  text-center">
                    <button type="button" class="w-75 btn btn-outline-success">Visit Clinic</button>
                </div>
            </div>
            
            
            
        );

}