import React, { Component } from "react";
import ReservationUI from "./ReservationUI";
import LandingNav from "../LandingNav";
import Footer from "../Footer";

export default class ReservationPageView extends Component {
    constructor(props) {
        super(props);
        //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        //console.log(this.props.location.data.information.treatments);
        //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    
    }

   
    render() {

        var clinicInformation = {
            clinicName : "KARIII!!@#!@#!@#!@#!@3",
            clinicId : "5dfe3f6e79469144a4653524"
        }


        return (
            <div>
                <LandingNav />
                {/* <ReservationUI name={this.props.location.data.information.name} treatments={this.props.location.data.information.treatments}></ReservationUI>  */}
                <ReservationUI userId={"5dee9f7b53e5670d6075500d"} clinicInformation={clinicInformation}  treatmentsInformation={this.props.location.data.information.treatments}></ReservationUI>
                <Footer />
            </div>
        );
    }
}
