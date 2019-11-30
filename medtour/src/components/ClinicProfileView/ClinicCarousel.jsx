import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ClinicCarousel() {
    
    return (

        <Carousel>
                <div>
                    <img src="C:\xampp\htdocs\MedTour\medtour\medtour\src\images\icons8-doctor-50-white.png" />
                    <p className="legend">Picture 1</p>
                </div>
                <div>
                    <img src="C:\xampp\htdocs\MedTour\medtour\medtour\src\images\icons8-doctor-50-white.png" />
                    <p className="legend">Picture 2</p>
                </div>
                <div>
                    <img src="C:\xampp\htdocs\MedTour\medtour\medtour\src\images\icons8-doctor-50-white.png" />
                    <p className="legend">Picture 3</p>
                </div>
            </Carousel>
        
    );

}