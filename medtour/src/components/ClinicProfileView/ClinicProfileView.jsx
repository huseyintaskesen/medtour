import React, {Component} from 'react';
import './clinicprofileview.css';
import Agenda from './components/agenda'
import ButtonAppBar from './components/dropdown.js'
import VirtualizedList from './components/treatmentList.js'

class ClinicProfileView extends Component {

  render() {
    return (
      <div className="ClinicProfileView bg-white">
        <div>
        <ButtonAppBar></ButtonAppBar>
        </div>
        <div className="row">
          <div className="column">
          <Agenda></Agenda>
          </div>
        </div>
      </div>

    );
  }
}

export default ClinicProfileView;