import React, { Component } from "react";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import Footer from "../Footer";
import LandingNav from "../LandingNav";
import "../../theme/animation.css";
import "../../../src/theme/custom.scss";
import "./landing.css";

const languages = [
    {
        name: "dentist",
        value: "0:0:91",
        label: "dentist",
        parname: "",
        url: "dentists|",
        subof: "0"
    },
    {
        name: "Dermatology Clinics",
        value: "0:0:1042",
        label: "Dermatology Clinics",
        parname: "",
        url: "dermatology|",
        subof: "0"
    },
    {
        name: "DBS - Deep Brain Stimulation",
        value: "323:0:317",
        label: "DBS - Deep Brain Stimulation",
        parname: "Neurology",
        url: "neurology|dbs-deep-brain-stimulation",
        subof: "0"
    },
    {
        name: "Deep Tissue Massage",
        value: "763:0:976",
        label: "Deep Tissue Massage",
        parname: "Massage Therapy",
        url: "massage-therapy|deep-tissue-massage",
        subof: "0"
    },
    {
        name: "Dental Implants",
        value: "105:0:91",
        label: "Dental Implants",
        parname: "Dentistry",
        url: "dentists|implants"
    },
    {
        name: "Dermal Fillers",
        value: "43:0:60",
        label: "Dermal Fillers",
        parname: "Medical Aesthetics",
        url: "beauty-clinics|dermal-fillers",
        subof: "0"
    },
    {
        name: "IUD - Intrauterine Device",
        value: "814:0:1040",
        label: "IUD - Intrauterine Device",
        parname: "Obstetrics and Gynaecology",
        url: "obstetrics-gynaecology|iud-intrauterine-device",
        subof: "0"
    },
    {
        name: "Dental Crowns",
        value: "103:0:91",
        label: "Dental Crowns",
        parname: "Dentistry",
        url: "dentists|dental-crowns",
        subof: "0"
    },
    {
        name: "Hair Loss Clinics",
        value: "0:0:25",
        label: "Hair Loss Clinics",
        parname: "",
        url: "hair-loss|",
        subof: "0"
    },
    {
        name: "Hair Transplant",
        value: "552:0:25",
        label: "Hair Transplant",
        parname: "Hair Loss",
        url: "hair-loss|hair-transplant",
        subof: "0"
    },
    {
        name: "Laser Hair Removal",
        value: "402:0:1548",
        label: "Laser Hair Removal",
        parname: "Waxing and Hair Removal",
        url: "beauty-salons|laser-hair-removal",
        subof: "0"
    },
    {
        name: "IPL Hair Removal",
        value: "1090:0:1548",
        label: "IPL Hair Removal",
        parname: "Waxing and Hair Removal",
        url: "beauty-salons|ipl-hair-removal",
        subof: "0"
    },
    {
        name: "Haemorrhoids Treatment",
        value: "1309:0:1041",
        label: "Haemorrhoids Treatment",
        parname: "Gastroenterology",
        url: "gastroenterology|haemorrhoids-treatment",
        subof: "0"
    },
    {
        name: "Hair Loss Treatment",
        value: "22:0:25",
        label: "Hair Loss Treatment",
        parname: "Hair Loss",
        url: "hair-loss|hair-loss-treatment",
        subof: "0"
    },
    {
        name: "Facial Hair Transplant",
        value: "1671:0:25",
        label: "Facial Hair Transplant",
        parname: "Hair Loss",
        url: "hair-loss|facial-hair-transplant",
        subof: "0"
    }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
        ? []
        : languages.filter(
              lang =>
                  lang.name.toLowerCase().slice(0, inputLength) === inputValue
          );
};

const getSuggestionValue = suggestion => suggestion.name;
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class Landing extends Component {
    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: "",
            suggestions: []
        };
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchClick() {
        console.log("treatment:" + this.state.value);
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Please enter the treatment you are looking for",
            value,
            onChange: this.onChange
        };
        return (
            <div>
                <LandingNav />
                <div className="landing-page">
                    <div className="heading">
                        <h4 className="display-4">
                            Find the best treatment in Turkey.
                        </h4>
                    </div>
                    <div className="input mb-3">
                        <div className="row">
                            <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={
                                    this.onSuggestionsFetchRequested
                                }
                                onSuggestionsClearRequested={
                                    this.onSuggestionsClearRequested
                                }
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                            />
                            <div className="input-group-append">
                                <Link
                                    to={{
                                        pathname: "/search",
                                        data: this.state.value
                                    }}
                                    className="btn btn-primary"
                                    id="button-addon2"
                                >
                                    Search
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary shadow">
                            <img
                                src={require("../../images/icons8-doctor-50-white.png")}
                                alt="doctor-icon"
                            ></img>
                            &nbsp;&nbsp;&nbsp;&nbsp; Contact Doctors
                        </button>
                        <Link to="/search">
                            <button className="btn btn-primary shadow">
                                <img
                                    src={require("../../images/icons8-clinic-50-white.png")}
                                    alt="clinic-icon"
                                ></img>
                                &nbsp;&nbsp;&nbsp;&nbsp; Explore Clinics
                            </button>
                        </Link>
                        <button className="btn btn-primary shadow">
                            <img
                                src={require("../../images/icons8-plane-50-white.png")}
                                alt="flight-icon"
                            ></img>
                            &nbsp;&nbsp;&nbsp;&nbsp; Look up for Flights
                        </button>
                        <button className="btn btn-primary shadow">
                            <img
                                src={require("../../images/icons8-hotel-50-white.png")}
                                alt="accomodation-icon"
                            ></img>
                            &nbsp;&nbsp;&nbsp;&nbsp; Find the best places to
                            stay
                        </button>
                    </div>
                    <img
                        id="Istanbul"
                        src={require("../../images/istanbul_skyline.svg.png")}
                        alt="Istanbul"
                    ></img>
                    <div className="landing-second">
                        <div className="landing-second-left">
                            <h2>Why Turkey?</h2>
                            <p>
                                Turkey is a leading player in the medical
                                tourist/healthcare facilitation industry. <br />
                                It is increasingly emerging as the destination
                                of choice for a wide range of medical <br />
                                procedures.
                                <br />
                                <br />
                                Turkey's advantage in medical tourism is the
                                high number of accredited hospitals <br />
                                in ophthalmic surgeries, bariatric and metabolic
                                surgery, plastic surgery, transplantation <br />
                                oncologic treatments as well as its affordable
                                prices, high-quality service, and is a leading
                                tourism destination with historical, cultural
                                and natural attractions.
                            </p>
                        </div>
                        <div className="landing-second-right">
                            <img
                                src={require("../../images/countries.jpg")}
                                alt="countries"
                            ></img>
                        </div>
                    </div>
                    <div className="landing-third">
                        <h2>
                            Top cities in Turkey where you can find the best
                            treatment.
                        </h2>
                        <div className="landing-third-images">
                            <img
                                id="istanbul"
                                src={require("../../images/istanbul.jpg")}
                                alt="Istanbul"
                            ></img>
                            <img
                                id="izmir"
                                src={require("../../images/izmir.jpg")}
                                alt="Izmir"
                            ></img>
                            <img
                                id="ankara"
                                src={require("../../images/ankara.jpg")}
                                alt="Ankara"
                            ></img>
                        </div>
                        <div className="landing-third-picture-tags">
                            <h3 id="istanbul">Istanbul</h3>
                            <h3 id="izmir">Izmir</h3>
                            <h3 id="ankara">Ankara</h3>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
