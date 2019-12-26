import React, {Component} from 'react';
import './clinicprofileview.css';
import Agenda from './components/agenda'
import ButtonAppBar from './components/dropdown.js'
import VirtualizedList from './components/treatmentList.js'
import Settings from '../ClinicSettings'

var c_id;

class ClinicProfileView extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      currentView:'calendar'
    }

    this.changeView = this.changeView.bind(this);

  }

  changeView(view){
    this.setState({
      currentView: view
    })
  }
  

  render() {
    let view =''
    
    if(this.state.currentView == 'calendar'){
      return (

        <div className="ClinicProfileView bg-white">
          <div>
          <ButtonAppBar changeView = {this.changeView}></ButtonAppBar>
          </div>
          <div className="row">
            <div className="column">
            <Agenda ></Agenda>
            </div>
          </div>
        </div>
  
      );
    }

    if(this.state.currentView == 'messages'){
      return (
        <div >
          <div>
          <ButtonAppBar changeView = {this.changeView}></ButtonAppBar>
          </div>
          hello
        </div>
  
      );
    }

    if(this.state.currentView == 'settings'){
      return (
        <div >
          <div>
          <ButtonAppBar changeView = {this.changeView}></ButtonAppBar>
          </div>
         <Settings></Settings>
        </div>
  
      );
    }


    
  }
}

export default ClinicProfileView;