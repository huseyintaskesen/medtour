import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import $ from 'jquery';

import Master_Detail from "./components/Master_Detail";
import Master_Detail2 from "./components/Master_Detail2";
import Master_Detail3 from "./components/Master_Detail3";
import SearchResultsView from "./components/SearchResultsView";
import Master_Detail5 from "./components/Master_Detail5";
import Grid from "./components/Grid";
import ProfilePagePatientView from "./components/ProfilePagePatientView";
import ProfilePageClinic from "./components/ProfilePageClinicView/ProfilePageClinic";
import ClinicCardComponent from "./components/ClinicCard"
import ClinicProfileView from "./components/ClinicProfileView/ClinicProfileView";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/Master_Detail" />
          <Route path = "/Master_Detail" component = { Master_Detail } />
          <Route path = "/Master_Detail2" component = { Master_Detail2 } />
          <Route path = "/Master_Detail3" component = { Master_Detail3 } />
          <Route path = "/SearchResultsView" component = { SearchResultsView } />
          <Route path = "/Master_Detail5" component = { Master_Detail5 } />
          <Route path = "/Grid" component = { Grid } />
          <Route path = "/profile" component = { ProfilePagePatientView } />
          <Route path = "/clinicprofile" component = { ProfilePageClinic } />
          <Route path = "/ClinicProfileView" component = { ClinicProfileView } />
          <Route path = "/ClinicCard" component = { ClinicCardComponent } />
          <Route path = "/search" component = { SearchResultsView } />

        </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;
