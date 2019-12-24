import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReservationUI from "./ReservationUI";
import LandingNav from "../LandingNav";
import Footer from "../Footer";

export default class ReservationPageView extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <ReservationUI></ReservationUI>
                <Footer />
            </div>
        );
    }
}
