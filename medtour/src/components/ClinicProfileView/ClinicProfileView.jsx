import React from 'react';
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AboutClinic from './AboutClinic';
import ClinicLocation from './ClinicLocation'
import ClinicCardTreatments from '../ClinicCard/ClinicCardTreatments';
import ClinicReview from '../ClinicCard/ClinicReview';



class ClinicProfileView extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            activeTab : '1',
            clinicName : "MedTour Clinic Name",
            clinicAddress : "Bilkent 77 yurt",
            clinicDescription : "fsakdjfhjkslddddddd dddddddddddddddddd dddddddddddddff sakdjfhjkslddddd ddddddddddd ddddddddddd dddddddddddffsakdjfhjk sldddddd dddddddddddd dddddddd ddddddddddddff sakdjfhjks lddddddddddddd  dddd dddddd  ddd ddd ddddd ddddf",
            clinicPhoneNumber : "+355674185985"
        };


    }

    toggleActiveTab = (which) => {
        this.setState({ activeTab : which });
    };
    

    render(){
        return(
            <div>
                <br></br>

                <div class="container=fluid">
                    <div class="row">

                        <div class="col-8 borderItGreen">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={ () =>  this.toggleActiveTab('1') }
                                >
                                    About Clinic
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() =>  this.toggleActiveTab('2') }
                                >
                                    Treatment List
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() =>  this.toggleActiveTab('3') }
                                >
                                    Reviews
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                    <h4>Information About Clinic</h4>
                                    </Col>
                                    <AboutClinic></AboutClinic>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                    <h4>Treatment List of Clinic</h4>
                                    </Col>
                                    <div class="col-12 ">
                                        The Treatments Offered By 'Clinic Name':
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                        <ClinicCardTreatments> </ClinicCardTreatments>
                                    </div>

                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                    <h4>All reviews for this Clinic</h4>

                                    <ClinicReview> </ClinicReview>
                                    <br></br>
                                    <ClinicReview> </ClinicReview>
                                    <br></br>
                                    <ClinicReview> </ClinicReview>
                                    <br></br>
                                    <ClinicReview> </ClinicReview>
                                    <br></br>
                                    <ClinicReview> </ClinicReview>
                                    <br></br>


                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>

                        <div class="col-4 borderIt">
                        <div class="col-12 borderIt">
                            'Clinic Name' MedTour Rating: 
                            <br></br>
                            5/5
                        </div>

                        <div class="col-12 borderIt locationDiv">
                            <ClinicLocation></ClinicLocation>
                        </div>
                    </div>

                    </div>
                </div>

            
            </div>

        );
    }


}

export default ClinicProfileView;

//const rootElement = document.getElementById("root");
//ReactDOM.render(<ClinicProfileView />, rootElement);
