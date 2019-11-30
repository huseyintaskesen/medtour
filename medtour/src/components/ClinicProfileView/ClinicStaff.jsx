
import React from 'react'
import styles from "./Styles//ClinicProfileStyle.css";


export default function ClinicStaff() {
    
    return (

        <div class="container-fluid borderIt">
            <div class="row ">
                <hr></hr>
                <div class="col-3 mr-0 pr-0 borderItGreen">
                    <div class="col-12 mr-0 pr-0">
                        Person Name
                    </div>
                    <div class="col-12 mr-0 pr-0">
                        <div class='ProfilePic'> 
                            <img src=""></img>
                        </div>
                    </div>
                </div>

                <div class="col-9 borderIt">
                    <div class="col-12">Profession: something</div>
                    <div class="col-12">Specialisations: something</div>
                    <div class="col-12">Languages(s): something</div>
                    <div class="col-12">About 'Dr Name'</div>
                </div>
                
            </div>    
        </div>
        
    );
}
