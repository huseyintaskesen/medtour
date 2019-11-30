
import React from 'react'
import ClinicCarousel from './ClinicCarousel'
import ClinicStaff from './ClinicStaff'



export default function AboutClinic() {
    
    return (

        
        <div class="container-fluid">

            <div class="row">
                <div class="col-12">Clinic Name</div>
                <div class="col-12"> 
                    <div class="row">
                        <div>
                            Call Now: +355674185985 
                        </div>
                        &emsp;

                        <div class='image addressIcon borderIt'> 
                            <img src=""></img>
                        </div>
                        <h5>Clinic Address</h5>
                    </div>
                   
                </div>
            </div>

            <div class="row">

                <div class="col-12">
                    <ClinicCarousel> </ClinicCarousel>
                </div>

                <div class="col-12">
                    <hr></hr>
                    About Clinic Information
                </div>
               
                <div class="col-12">
                    <hr></hr>
                    Services offered:
                    <ul> 
                        <li>First Service</li> 
                        <li>Second Service</li> 
                        <li>Third Service</li> 
                        <li>Fourth Service</li> 
                    </ul> 
                </div>

               

            </div>

            <div class="row">
                
                <div class="col-12">
                    <hr></hr>
                    'Clinic Name' Staff:
                </div>
                <ClinicStaff></ClinicStaff>
                <ClinicStaff></ClinicStaff>
            </div>

        </div>
        
        
        
    );

}