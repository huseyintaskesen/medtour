 import React, {Component, Fragment} from 'react';

import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import RegisterModal from './Authentication/RegisterModal';
import LoginModal from './Authentication/LoginModal';
import Logout from './Authentication/Logout';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

class AppNavBar extends Component{

    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){

        const { isAuthenticated, user } = this.props.auth;


        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="nabbar-text mr-3">
                        <strong>{ user ? `Welcome ${user.name}` : ""}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout></Logout>
                </NavItem>
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal></RegisterModal>
                </NavItem>
                
                <NavItem>
                    <LoginModal></LoginModal>
                </NavItem>
            </Fragment>
        )

        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            Clinics List
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar >
                            <Nav className="ml-auto" navbar>
                                
                                {isAuthenticated ? authLinks : guestLinks}

                            </Nav>
                        </Collapse>
                        
                    </Container>
                </Navbar>
            </div>
        );
        
    }
}


const mapStateToProps = state => ({ //for props
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavBar);