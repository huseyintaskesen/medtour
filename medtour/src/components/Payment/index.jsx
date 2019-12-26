import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import Card from "./card.jsx";
import Footer from "../Footer";

class Payment extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.data);
    }

    render() {
        return (
            <div>
                <LandingNav />
                <Card informationToPass={this.props.location.data} />
                <Footer />
            </div>
        );
    }
}

export default Payment;
