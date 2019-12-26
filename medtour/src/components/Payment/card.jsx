import React from "react";
import Cards from "react-credit-cards";
import axios from "axios";
import "react-credit-cards/es/styles-compiled.css";
import "./card.css";

export default class PaymentForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.informationToPass);
        //console.log(this.props.location.data.information.treatments);
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    }

    state = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: ""
    };

    handleInputFocus = e => {
        this.setState({ focus: e.target.name });
    };

    handleInputChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <div className="container-fluid col-12 bg-white">
                    <div className="offset-1 col-10">
                        <div className="row pt-5 pl-5 borderDown">
                            <h4>Reservation Summary</h4>
                        </div>
                        <div className=" pt-3 row">
                            <div className="offset-1 col-10 pt-4">
                                <h5>Reservation Information:</h5>
                                <div className="row pl-5 pt-4 reservation-details">
                                    <ul>
                                        <li>
                                            <p>Treatment Name: </p>
                                        </li>
                                        <li>
                                            <p>Treatment Date: </p>
                                        </li>
                                        <li>
                                            <p>Clinic Name: </p>
                                        </li>
                                        <li>
                                            <p>Clinic Adress: </p>
                                        </li>
                                        <li>
                                            <p>Hotel Name: </p>
                                        </li>
                                        <li>
                                            <p>Check-In Date: </p>
                                        </li>
                                        <li>
                                            <p>Check-Out Date: </p>
                                        </li>
                                        <li>
                                            <p>Outbound Date & Time: </p>
                                        </li>
                                        <li>
                                            <p>Return Date & Time: </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-1 col-10 pt-4">
                                <h5>Total Price:</h5>
                                <div className="row pl-5 pt-4 reservation-details">
                                    <ul>
                                        <li>
                                            <p>Treatment: </p>
                                        </li>
                                        <li>
                                            <p>Accomodation: </p>
                                        </li>
                                        <li>
                                            <p>Transportation: </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 pl-5 borderDown">
                            <h4>Please enter your payment details</h4>
                        </div>
                        <div className="row">
                            <div className="col-6 mt-4 pt-4 pb-4">
                                <Cards
                                    cvc={this.state.cvc}
                                    expiry={this.state.expiry}
                                    focused={this.state.focus}
                                    name={this.state.name}
                                    number={this.state.number}
                                />
                            </div>
                            <div className="col-6 mt-4 pt-4 pb-4">
                                <form>
                                    <div className="form-group card-info">
                                        <input
                                            className="form-control"
                                            type="tel"
                                            name="number"
                                            placeholder="Card Number"
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                        <input
                                            className="form-control"
                                            type="tel"
                                            name="expiry"
                                            placeholder="Expiration Date"
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                        <input
                                            className="form-control"
                                            type="tel"
                                            name="cvc"
                                            placeholder="CVC"
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div id="PaymentForm"></div>
                        </div>
                        <div
                            className="row mt-4 pt-4 pb-5 mx-auto"
                            style={{ width: "100px" }}
                        >
                            <button
                                className="btn btn-primary"
                                id="button-pay"
                                onClick={click => {
                                    axios
                                        .post(
                                            "http://localhost:3001/api/tourData/newTour",
                                            this.props.informationToPass[0],
                                            this.props.informationToPass[1]
                                        )
                                        .then(res => {
                                            alert("SUCESS!!!");
                                        })
                                        .catch(err => {
                                            alert("FAILL");
                                            console.log(err);
                                        });
                                }}
                            >
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
