import React, { Component } from "react";
import ReservationUI from "./ReservationUI";
import LandingNav from "../LandingNav";
import Footer from "../Footer";

export default class ReservationPageView extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.data);
    }

    render() {
        return (
            <div>
                <LandingNav />
                {/* <ReservationUI name={this.props.location.data.information.name} treatments={this.props.location.data.information.treatments}></ReservationUI> */}
                <ReservationUI name="KARIII!!@#!@#!@#!@#!@3" ></ReservationUI>
                <Footer />
            </div>
        );
    }
}
