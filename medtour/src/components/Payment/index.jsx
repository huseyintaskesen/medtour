import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import Card from "./card.jsx";
import Footer from "../Footer";

class Payment extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <Card />
                <Footer />
            </div>
        );
    }
}

export default Payment;
