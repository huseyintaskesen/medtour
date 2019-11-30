import React from 'react'
import styles from "./Styles/clinicCardStyle.css"

export default function ClinicCardImageAndRating(props) {
    
        return (

            <div class="card w-100 mx-0 my-0">
                <div class="">

                    <div class="col-12">
                        <div class=" card-header row  text-left text-weight-bold">
                            <div class="col-6 mx-0 px-0"> 

                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-1 text-right borderIt">
                                            <span class="fa fa-stack fa-lg">
                                                <i class="fa fa-certificate fa-stack-2x"></i>
                                                <i class="fa fa-check fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </div>
                                        <div class="col-10 mx-0 px-0">
                                           {props.review_author}
                                        </div>
                                    </div>
                                </div>
                            </div>

                                
                            <div class="col-3 "> {props.review_stars}/5 </div>
                            <div class="col-3 text-right"> {props.review_date} </div>
                        </div>
                        <div class="col-12 "> {props.review_title}</div>
                    </div>
                    
                    <div class="col-12 text-left ">
                    {props.review_description}
                    </div>

                </div>
            </div>
            
            
            
        );

}