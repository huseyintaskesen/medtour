import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./landing-nav.css";

class LandingNav extends Component {


    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }

    changeView(view){
        this.setState({
          currentView: view
        })
    }
    
    render() {
        return (
            <div className="navs border-bottom border-primary">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h3>MedTour</h3>
                </Link>
                <ul className="nav justify-content-end">
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <li className="nav-item">
                            <span className="nav-link">About</span>
                        </li>
                    </Link>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <li className="nav-item">
                            <span className="nav-link">Login</span>
                        </li>
                    </Link>
                    <Link to="/signUp" style={{ textDecoration: "none" }}>
                        <li className="nav-item">
                            <span className="nav-link">Sign Up</span>
                        </li>
                    </Link>
                    <Link to="/clinicOwners" style={{ textDecoration: "none" }}>
                        <li className="nav-item">
                            <span className="nav-link">Clinic Owners</span>
                        </li>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <li className="nav-item">
                            <span className="nav-link">Contact</span>
                        </li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default LandingNav;
