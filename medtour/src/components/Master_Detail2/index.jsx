import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Icon, InlineIcon } from "@iconify/react";
import home from "@iconify/icons-mdi/home";
import doctorIcon from '@iconify/icons-mdi/doctor';
import hospitalIcon from '@iconify/icons-mdi/hospital';
import airplaneIcon from '@iconify/icons-mdi/airplane';
import hotelIcon from '@iconify/icons-mdi/hotel';

// import "./master-detail-2.css";

export default class Master_Detail2 extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="heading">
                    <h4 className="display-4">
                        Find the best treatment in Turkey.
                    </h4>
                </div>
                <div className="input">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="What type of treatment you are looking for?"
                            aria-label="What type of treatment you are looking for?"
                            aria-describedby="button-addon2"
                        ></input>
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary"
                                type="button"
                                id="button-addon2"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                  <button className="btn btn-primary">
                    <InlineIcon icon={doctorIcon} width="50" height="50" />
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; Contracted Doctors                     
                  </button>
                    <button className="btn btn-primary">  
                      <InlineIcon  icon={hospitalIcon} width="50" height="50"  />
                      <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; Explore Clinics
                        
                    </button>
                    <button className="btn btn-primary">
                      <InlineIcon icon={airplaneIcon} width="50" height="50" />
                      <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; Look up for Flights
                    </button>
                    <button className="btn btn-primary">
                      <InlineIcon icon={hotelIcon} width="50" height="50" />
                      <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp; Find the best places to stay
                    </button>
                </div>
            </div>
        );
    }
  }
