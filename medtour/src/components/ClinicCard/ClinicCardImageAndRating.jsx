import React from 'react'
import styles from "./Styles/clinicCardStyle.css"
import clinicImage from "./ClinicCardImages/clinicImage.png"


export default function ClinicCardImageAndRating() {
    
        return (

            <div class="row">

                <div class="col-12">
                    <img class="w-100" src={clinicImage} alt="Logo" />
                </div>
                <hr></hr>
                <div class="col-12 bold  text-center">
                    <strong> Rating: 5/5 </strong>

                </div>

                <div class="col-12 bold  text-center">
                    <button type="button" class="w-75 btn btn-outline-success">Visit Clinic</button>
                </div>
            </div>
            
            
            
        );

}