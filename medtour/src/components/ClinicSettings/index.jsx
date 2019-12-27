import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import Footer from "../Footer";
import "./clinic-settings.css";
import MaterialTable from "./treatment-table";
import axios from "axios";
import cogoToast from 'cogo-toast';

var c_id;
var clinic_name;

class ClinicSettings extends Component {

    constructor(props){
        super(props)
        this.name_input = React.createRef();
        this.city_input = React.createRef();
        this.type_input = React.createRef();
        this.address_input = React.createRef();
        this.email_input = React.createRef();
        this.bio_input = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this)

        c_id = localStorage.getItem('clinicID');
        var clinic = {}
        this.state = {clinic: clinic};
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/clinics/"+c_id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },}).then(response =>{
            response.json().then(resp => {
                this.setState({ clinic: resp.clinics });
            }
            )
            })
    }

    async handleSubmit(){

        var name = this.state.clinic.name;
        if(this.name_input.current.value != '' &&  name != this.name_input.current.value){
            name = this.name_input.current.value 
        }

        var city = this.state.clinic.city;
        if(this.city_input.current.value != '' &&  city != this.city_input.current.value){
            city = this.city_input.current.value 
        }

        var type = this.state.clinic.type;
        if(this.type_input.current.value != '' &&  type != this.type_input.current.value){
            type = this.type_input.current.value 
        }

        var address = this.state.clinic.address;
        if(this.address_input.current.value != '' &&  address != this.address_input.current.value){
            address = this.address_input.current.value 
        }

        var email = this.state.clinic.email;
        if(this.email_input.current.value != '' && email != this.email_input.current.value){
            email = this.email_input.current.value 
        }

        var bio = this.state.clinic.bio;
        if(this.bio_input.current.value != '' && bio != this.bio_input.current.value){
            bio = this.bio_input.current.value 
        }
        
        var returned_value;
        returned_value = await this.updateInformation(name, city, type, address, email, bio);
        if(returned_value != undefined){
            cogoToast.success("Your clinic information has been updated!")
        }
        console.log(returned_value)


    }


    async updateInformation(name, city, type, address, email, bio){

        //Parameters
        const body = JSON.stringify({
            name,
            city,
            type,
            address,
            email,
            bio
        });

        //Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };

        var resp = await axios.put("api/clinics/updateInformation/"+c_id, body, config).then((res) => {
            return res.data
        }).catch(err => {
            cogoToast.error("Error occurred! Check your credentials!")
        })
        return resp
    }


    render() {
        return (
            <div>
                <LandingNav />
                <div className="container-fluid col-12 bg-white">
                    <div className="offset-1 col-10">
                        <div className="row pt-5 pl-3 pt-3 pb-3 borderDown">
                            <h3>Settings</h3>
                        </div>
                        <div className="row clinic-settings">
                            <div className="col-6">
                                <div className="row">
                                    <form>
                                        <div class="form-group">
                                            <label for="input-field" >
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                                placeholder={this.state.clinic.name}
                                                ref={this.name_input}
                                            />
                                            <label for="input-field">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                                placeholder={this.state.clinic.city}
                                                ref={this.city_input}
                                            />
                                            <label for="input-field">
                                                Type
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                                placeholder={this.state.clinic.type}
                                                ref={this.type_input}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <form>
                                        <div class="form-group">
                                            <label for="input-field">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                                placeholder={this.state.clinic.address}
                                                ref={this.address_input}
                                            />
                                            <label for="input-field">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                                placeholder={this.state.clinic.email}
                                                ref={this.email_input}
                                            />
                                            <label for="input-field">Bio</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="input-field"
                                                aria-describedby="emailHelp"
                                                placeholder={this.state.clinic.bio}
                                                ref={this.bio_input}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        </div>
                        <div className="row pt-3 pl-3 pb-3">
                            <h5>Treatments</h5>
                        </div>
                        <div className="row pb-5">
                            <link
                                rel="stylesheet"
                                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                            />
                            <MaterialTable />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ClinicSettings;
