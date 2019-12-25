import React, { Component } from "react";
import ReservationUI from "./ReservationUI";
import LandingNav from "../LandingNav";
import Footer from "../Footer";

export default class ReservationPageView extends Component {

    constructor(props){
        super(props)
        console.log(this.props.location.data)
    }




    render() {
        return (
            <div>
                <LandingNav />
                <ReservationUI name={this.props.location.data.information.name} treatments={this.props.location.data.information.treatments} clinic_id={this.props.location.data.information.clinic_id} clinic_location = {this.props.location.data.information.clinic_id}></ReservationUI>
                <Footer />
            </div>
        );
    }
}
