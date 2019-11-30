import React from 'react'
import styles from "./Styles/clinicCardStyle.css";

export default function ClinicCardTreatments (props) {
    
        return (

            <tr class="row mx-0 px-0 my-0 py-0 text-left">
                    <div class="col-5 treatmentLeftLine"> {props.treatment_name} </div>
                    <div class="col-5 treatmentLeftLine"> {props.treatment_price} </div>
                    <div class="col-2">
                        <button class="btn btn-success py-0"> Contact</button>    
                    </div>
            </tr >
            
        );

}