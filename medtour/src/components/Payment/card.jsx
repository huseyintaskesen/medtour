import React from "react";
import Cards from "react-credit-cards";
import axios from "axios";
import "react-credit-cards/es/styles-compiled.css";
import "./card.css";

export default class PaymentForm extends React.Component {
    constructor(props) {
        super(props);
        var infoPack = this.props.informationToPass;
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
        var infoPack = this.props.informationToPass;
        var sendBody = JSON.stringify(infoPack[0]);
        console.log(sendBody);
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
                                            <p>
                                                Treatment Name:{" "}
                                                {
                                                    infoPack[0]
                                                        .treatment_Name_Send
                                                }
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Treatment Date:{" "}
                                                {infoPack[0].treatment_Date.slice(
                                                    0,
                                                    10
                                                )}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Clinic Name:{" "}
                                                {infoPack[0].clinicName}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Clinic Adress:{" "}
                                                {infoPack[0].clinicAddress}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Hotel Name: {infoPack[0].name}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Check-In Date:{" "}
                                                {infoPack[0].checkIn.slice(
                                                    0,
                                                    10
                                                )}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Check-Out Date:{" "}
                                                {infoPack[0].checkOut.slice(
                                                    0,
                                                    10
                                                )}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Outbound Flight Location, Date &
                                                Time: {infoPack[0].location_one}
                                                {" | "}
                                                {infoPack[0].departure_one.substr(
                                                    0,
                                                    infoPack[0].departure_one.indexOf(
                                                        "T"
                                                    )
                                                )}
                                                {" | "}
                                                {infoPack[0].departure_one.substr(
                                                    infoPack[0].departure_one.indexOf(
                                                        "T"
                                                    ) + 1,
                                                    5
                                                )}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Return Flight Location Date &
                                                Time: {infoPack[0].location_two}
                                                {" | "}
                                                {infoPack[0].departure_two.substr(
                                                    0,
                                                    infoPack[0].departure_two.indexOf(
                                                        "T"
                                                    )
                                                )}
                                                {" | "}
                                                {infoPack[0].departure_two.substr(
                                                    infoPack[0].departure_two.indexOf(
                                                        "T"
                                                    ) + 1,
                                                    5
                                                )}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-1 col-10 pt-4">
                                <h5>
                                    Total Price:{" "}
                                    {parseInt(
                                        infoPack[0].treatment_Price_Send
                                    ) +
                                        parseInt(infoPack[0].price) +
                                        parseInt(infoPack[0].price_one) +
                                        parseInt(infoPack[0].price_two)}
                                    {" USD"}
                                </h5>
                                <div className="row pl-5 pt-4 reservation-details">
                                    <ul>
                                        <li>
                                            <p>
                                                Treatment:{" "}
                                                {
                                                    infoPack[0]
                                                        .treatment_Price_Send
                                                }
                                                {" USD"}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Accomodation:{" "}
                                                {infoPack[0].price}{" "}
                                                {infoPack[0].currency}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Transportation:{" "}
                                                {infoPack[0].price_one}{" "}
                                                {infoPack[0].currency_one}
                                                {" | "}
                                                {infoPack[0].price_two}{" "}
                                                {infoPack[0].currency_two}
                                            </p>
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
                                            sendBody,
                                            infoPack[1]
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
