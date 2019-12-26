import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import Tabs from "./tabs";
import Footer from "../Footer";
import "./clinic-profile-patient.css";

class ClinicProfilePatient extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.data);
        this.state = {
            clinic_id: 0,
            clinic_name: "",
            clinic_address: "",
            treatments: []
        };
    }

    render() {
        return (
            <div>
                <LandingNav />
                <div className="container-fluid name bg-dark">
                    <div className="row">
                        <div className="col-6">
                            <h4>{this.props.location.data.name}</h4>
                        </div>
                        <div className="col-6">
                            <h5>{this.props.location.data.location}</h5>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-white">
                    <div className="row">
                        <Tabs
                            information={this.props.location.data}
                            bio={this.props.location.data.bio}
                            id ={this.props.location.data.clinic_id}

                        />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    
    // render() {
    //     if(this.state.currentView == "")
    //     {
    //         return (
    //             <div>
    //                 <LandingNav />
    //                 <div className="container-fluid name bg-dark">
    //                     <div className="row">
    //                         <div className="col-6">
    //                             <h4>{this.props.location.data.name}</h4>
    //                         </div>
    //                         <div className="col-6">
    //                             <h5>{this.props.location.data.location}</h5>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="container-fluid bg-white">
    //                     <div className="row">
    //                         <Tabs foo = {this.changeView}
    //                             information={this.props.location.data}
    //                             bio={this.props.location.data.bio}
    //                         />
    //                     </div>
    //                 </div>
    //                 <Footer />
    //             </div>
    //         );
    //     }
    //     if(this.state.currentView == "chat")
    //     {
    //         return (
    //             <div>
    //                 <LandingNav />
    //                 <div className="container-fluid bg-white">
    //                 <ChatApp></ChatApp>
    //                 </div>
    //                 <Footer />
    //             </div>
    //         );
    //     }
    // }
}

export default ClinicProfilePatient;
