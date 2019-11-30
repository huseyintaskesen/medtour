import React, { Component } from "react";
import classnames from "classnames";
import WarningMessage from "../WarningMessage";
import MasterDetailPage from "./MasterDetailPage";
import MasterDetailSideBarTab from "./MasterDetailSideBarTab";
import GreyAvatar from "../../images/GreyAvatar.svg";
import styles from "./masterdetail.module.css";
import CONSTANTS from "../../constants";
import ClinicWrapper from "./ClinicWrapperComponent";
import ClinicCardComponent from "../ClinicCard/ClinicCardComponent"

export default class SearchResultsView extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      clinics: props.clinics
    }
  }
  
  clinicData = [
    {
      name: 'Akyaka',
      location: 'Ankara',
      type: 'Dentist',
      address: '1.sokak',
      treatments: [
        {
          'treatment_name' : 'diş çekimi',
          'treatment_price' : 350
        },
        {
          'treatment_name' : 'tel',
          'treatment_price' : 2000
        },
        {
          'treatment_name' : 'dolgu',
          'treatment_price' : 1500
        }
      ],
      review: 
      {
        'author': 'asaf',
        'stars': 4,
        'date': '20.09.2017',
        'title': 'satisfied, highly recommended',
        'description': 'everything was ok.'
      }
    },
    {
        name: 'Aura',
        location: 'Istanbul',
        type: 'Laser Eye',
        address: '2.sokak',
        treatments: [
          {
            'treatment_name' : 'goz ameliyati',
            'treatment_price' : 9000
          },
          {
            'treatment_name' : 'göz muayenesi',
            'treatment_price' : 500
          }
        ],
        review: 
          {
            'author': 'asaf',
            'stars': 4,
            'date': '20.09.2017',
            'title': 'clean clinic but very expensive',
            'description': ''
          }
        
    },
    {
        name: 'Guven',
        location: 'Ankara',
        type: 'Hair transparant',
        address: '3.sokak',
        treatments: [
          {
            'treatment_name' : "saç ekimi",
            'treatment_price' : 4500
          },
          {
            'treatment_name' : 'saç bakımı',
            'treatment_price' : 500
          }
        ],
        review: 
        {
          'author': 'asaf',
          'stars': 5,
          'date': '20.09.2017',
          'title': 'clean clinic with experienced doctors',
          'description': 'i was very pleased during my treatment.'
        }
    }
  ]
  createCardComponents(){
    var nodes = this.clinicData.map(function (clinic){
      return (
        <div>
          <ClinicCardComponent name={clinic.name} type={clinic.type} location={clinic.location} address={clinic.address} treatments = {clinic.treatments} review={clinic.review}></ClinicCardComponent>
        </div>
      );
    });
    return (
      <div className="commentList">
        {nodes}
      </div>
    );


  }
  render(){
      return(
      <div>
      {this.createCardComponents()}
      </div>
      );
}
}