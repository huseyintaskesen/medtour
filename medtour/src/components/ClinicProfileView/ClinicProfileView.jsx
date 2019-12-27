import React, {Component} from 'react';
import './clinicprofileview.css';
import Agenda from './components/agenda'
import ButtonAppBar from './components/dropdown.js'
import VirtualizedList from './components/treatmentList.js'
import Settings from '../ClinicSettings'
import MessagesView from './components/messages.js'

var c_id;

class ClinicProfileView extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      currentView:'',
      userName:'',
      surName:'',
      treatmentName:'',
      treatmentPrice:0,
      treatmentDate: new Date()
    }

    this.changeView = this.changeView.bind(this);

  }


  componentDidMount(){
    c_id = localStorage.getItem('clinicID');
       
        const options = {
            headers: {'content-type': 'application/json'}
        };
        // search/"+treatment_type
        fetch("http://localhost:3001/api/tourData/clinic/"+c_id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        }).then(response => {
            return response.json();
        }).then(muutuja => {
            console.log('RESPONSE'+muutuja.trans[0].u_id.name)
            this.setState({
                userName: muutuja.trans[0].u_id.name,
                surName: muutuja.trans[0].u_id.surname,
                treatmentName: muutuja.trans[0].t_id.name,
                treatmentDate: muutuja.trans[0].treatment_Date,
                treatmentPrice: muutuja.trans[0].t_id.priceLow
            },()=>{
              console.log(this.state)
              this.setState({currentView: 'calendar'})
            })
            
        });
  }

  changeView(view){
    this.setState({
      currentView: view
    })
  }

  

  render() {
    let view =''
    if(this.state.currentView == ''){
      return (
        <div className="ClinicProfileView bg-white">
          <div>
          <ButtonAppBar changeView = {this.changeView}></ButtonAppBar>
          </div>
          <div className="row">
          </div>
        </div>
      );
    }
    if(this.state.currentView == 'calendar'){
      return (
        <div className="ClinicProfileView bg-white">
          <div>
          <ButtonAppBar changeView = {this.changeView}></ButtonAppBar>
          </div>
          <div className="row">
            <div className="column">
            <Agenda treatment_object={this.state}></Agenda>
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
         <MessagesView></MessagesView>
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