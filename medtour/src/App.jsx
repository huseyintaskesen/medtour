import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
import ClinicProfileView from "./components/ClinicProfileView/ClinicProfileView.jsx";
import ClinicSettings from "./components/ClinicSettings";
import Chat from "./components/Chatapp"
import "./theme/animation.css";
import "./theme/custom.scss";
import "./components/Landing/landing.css";

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentView: ""
        };
        this.changeView = this.changeView.bind(this);
    }

    changeView(view){
        this.setState({
          currentView: view
        })
    }
    
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
                        path="/clinicdetails"
                        component={ClinicProfilePatient}
                    />
                    <Route
                        path="/reservation"
                        component={ReservationPageView}
                    />

                    <Route
                        path="/clinic-profile-page"
                        component={ClinicProfileView}
                    />
                    <Route path="/clinic-settings" component={ClinicSettings} />
                    <Route path="/chat" component={Chat} />
                </Switch>
            </React.Fragment>
        );
    }


    // render() {
    //     let view ='';
  
    //     if (this.state.currentView === "") {
    //         view = 
    //         <React.Fragment>
    //         <div>
    //             <LandingNavBar  changeView={this.changeView}/>
    //             <Landing/>
    //             <Footer/>
    //         </div>
    //         </React.Fragment>
    //     } else if (this.state.currentView === "About") {
    //         view = <About changeView={this.changeView}/>
    //     } else if (this.state.currentView === "Contact") {
    //       view = <Contact changeView={this.changeView}/>
    //     }
    //     return (
    //         <div className="App">
    //             {view}
    //         </div>
    //     );
    // }
  
}

export default App;
