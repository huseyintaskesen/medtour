﻿import React, { useState, useEffect, Component } from "react";
import Select, { components } from "react-select";
import ClinicCardAsaf from "../ClinicCardAsaf";

const options = [
    { value: "ankara", label: "Ankara" },
    { value: "istanbul", label: "Istanbul" },
    { value: "izmir", label: "Izmir" }
];

const indicatorSeparatorStyle = {
    alignSelf: "stretch",
    backgroundColor: "purple",
    marginBottom: 8,
    marginTop: 8,
    width: 1
};

const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
};
export default class SearchResultsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clinics: props.clinics,
            selectedOption: null,
            treatment: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        var treatment_type = this.props.location.data
        this.setState({
            treatment: treatment_type
          });
        console.log('DATA IS:' + treatment_type)
    } 

    handleChange = selectedOption => {
        this.setState(
          { selectedOption },
          () => console.log(`Option selected:`, this.state.selectedOption)
        );

        // let clinics = this.state.clinics
      };

    clinicData = [
        {
            name: "Akyaka",
            city: "ankara",
            type: "Dentist",
            address: "1.sokak",
            treatments: [
                {
                    treatment_name: "diş çekimi",
                    treatment_price: 350
                },
                {
                    treatment_name: "tel",
                    treatment_price: 2000
                },
                {
                    treatment_name: "dolgu",
                    treatment_price: 1500
                }
            ],
            review: {
                author: "asaf",
                stars: 4,
                date: "20.09.2017",
                title: "satisfied, highly recommended",
                description: "everything was ok."
            },
            rating: 2,
            avatar: "http://placekitten.com/50/50"
        },
        {
            name: "Aura",
            city: "istanbul",
            type: "Laser Eye",
            address: "2.sokak",
            treatments: [
                {
                    treatment_name: "goz ameliyati",
                    treatment_price: 9000
                },
                {
                    treatment_name: "göz muayenesi",
                    treatment_price: 500
                },
                {
                    treatment_name: "dolgu",
                    treatment_price: 1500
                }
            ],
            review: {
                author: "asaf",
                stars: 4,
                date: "20.09.2017",
                title: "clean clinic but very expensive",
                description: ""
            },
            rating: 5,
            avatar: "http://placekitten.com/49/50"
        },
        {
            name: "Guven",
            city: "ankara",
            type: "Hair transparant",
            address: "3.sokak",
            treatments: [
                {
                    treatment_name: "saç ekimi",
                    treatment_price: 4500
                },
                {
                    treatment_name: "saç bakımı",
                    treatment_price: 500
                },
                {
                    treatment_name: "dolgu",
                    treatment_price: 1500
                }
            ],
            review: {
                author: "asaf",
                stars: 5,
                date: "20.09.2017",
                title: "clean clinic with experienced doctors",
                description: "i was very pleased during my treatment."
            },
            rating: 4,
            avatar: "http://placekitten.com/50/51"
        }
    ];
    createCardComponents() {
        var nodes = this.clinicData.map(function(clinic) {
            return (
                <div>
                    <ClinicCardAsaf
                        name={clinic.name}
                        treatments={clinic.treatments}
                        avatar={clinic.avatar}
                        rating={clinic.rating}
                        location={clinic.address}
                    ></ClinicCardAsaf>
                    {/* <ClinicCardComponent name={clinic.name} type={clinic.type} location={clinic.location} address={clinic.address} treatments = {clinic.treatments} review={clinic.review} avatar={clinic.avatar} rating={clinic.rating}></ClinicCardComponent> */}
                </div>
            );
        });
        return <div className="commentList">{nodes}</div>;
    }
    render() {
        const { selectedOption } = this.state;
        
        return (
            <div>
                <div>
                    <p>Filter by city:{this.state.treatment}</p>
                    {/* style={{float:"left", marginRight:'9px'}} */}
                    <Select
                        theme={theme => ({
                            ...theme,
                            colors: {
                                ...theme.colors,
                                primary: "darkred",
                                primary25: "#DE8080",
                                primary50: "#DE8080",
                                primary75: "#DE8080"
                            }
                        })}
                        closeMenuOnSelect={true}
                        components={{ IndicatorSeparator }}
                        value={selectedOption}
                        onChange={this.handleChange}
                        // defaultValue={['purple', 'yellow']}
                        isMulti
                        options={options}
                    />
                </div>
                {this.createCardComponents()}
                
            </div>
        );
    }
}
