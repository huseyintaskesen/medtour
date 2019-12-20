import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import LandingNavBar from "./components/LandingNav";
import Footer from "./components/Footer";

import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ClinicLoginAndRegister from "./components/ClinicLoginAndRegister";
import Contact from "./components/Contact";
import SearchResultsView from "./components/SearchResultsView";
import ProfilePagePatientView from "./components/ProfilePagePatientView";
import ProfilePageClinic from "./components/ProfilePageClinicView/ProfilePageClinic";
import LandingPage from "./components/Landing";
import ClinicProfilePatient from "./components/ClinicProfilePatient";
import ReservationPageView from "./components/ReservationPageView";

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Redirect exact path="/" to="/landing" />
                    <Route path="/About" component={About} />
                    <Route path="/Login" component={Login} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route
                        path="/ClinicOwners"
                        component={ClinicLoginAndRegister}
                    />
                    <Route path="/Contact" component={Contact} />
                    <Route
                        path="/SearchResultsView"
                        component={SearchResultsView}
                    />
                    <Route path="/profile" component={ProfilePagePatientView} />
                    <Route
                        path="/clinicprofile"
                        component={ProfilePageClinic}
                    />
                    <Route path="/search" component={SearchResultsView} />
                    <Route path="/landing" component={LandingPage} />
                    <Route
                        path="/clinic-profile-patient"
                        component={ClinicProfilePatient}
                    />
                    <Route
                        path="/reservation"
                        component={ReservationPageView}
                    />
                    
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
