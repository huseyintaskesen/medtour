import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import Tabs from "./tabs";
import Footer from "../Footer";
import "./clinic-profile-patient.css";



class ClinicProfilePatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clinic_id: 0,
            clinic_name : "",
            clinic_address : "",
            treatments : [],
        }
    }

    // componentDidMount() {
        
    //     var id = this.props.location.data
    //     this.setState({
    //         clinic_id: id,
    //      });
    //      fetch("http://localhost:3001/api/clinics/"+id, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         }).then(response => {
    //             return response.json();
    //         }).then(muutuja => {
    //             this.setState({
    //                 clinic_name: muutuja.clinics.name,
    //                 clinic_address: muutuja.clinics.address,
    //                 treatments: muutuja.clinics.treatments
    //             })
    //             console.log("from muutuja :" + muutuja.clinics.treatments[0].name)
    //             console.log("as state:" + this.state.treatments[0].name)
    //         })}
    



    render() {
        return (
            <div>
                <LandingNav />
                <div className="container-fluid name bg-dark">
                    <div className="row">
                        <div className="col-6">
                            <h4>{this.state.clinic_name}</h4>

                        </div>
                        <div className="col-6">
                            <h5>{this.state.clinic_address}</h5>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-white">
                    <div className="row">

                        <Tabs />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ClinicProfilePatient;
