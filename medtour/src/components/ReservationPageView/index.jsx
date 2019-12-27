import React, { Component } from "react";
import ReservationUI from "./ReservationUI";
import LandingNav from "../LandingNav";
import Footer from "../Footer";

export default class ReservationPageView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var clinicInformation = {
            clinicName: this.props.location.data.information.name,
            clinicAddress: this.props.location.data.information.location,
            clinicId: this.props.location.data.information.clinic_id
        };

        return (
            <div>
                <LandingNav />
                {/* <ReservationUI name={this.props.location.data.information.name} treatments={this.props.location.data.information.treatments}></ReservationUI>  */}
                <ReservationUI
                    userId={"5dee9f7b53e5670d6075500d"}
                    clinicInformation={clinicInformation}
                    treatmentsInformation={
                        this.props.location.data.information.treatments
                    }
                ></ReservationUI>
                <Footer />
            </div>
        );
    }
}
