import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./user-nav.css";

class UserNav extends Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }

    changeView(view) {
        this.setState({
            currentView: view
        });
    }

    render() {
        return (
            <div className="navs border-bottom border-primary">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h3>Home</h3>
                </Link>
                <ul className="nav justify-content-end">
                    <Link to="" style={{ textDecoration: "none" }}>
                        <li className="nav-item">
                            <span className="nav-link">Reservations</span>
                        </li>
                    </Link>
                    <Link to="" style={{ textDecoration: "none" }}>
                        <li className="nav-item">
                            <span className="nav-link">Messages</span>
                        </li>
                    </Link>
                    <Link to="" style={{ textDecoration: "none" }}>
                        <li className="nav-item">
                            <span className="nav-link">Settings</span>
                        </li>
                    </Link>
                    <Link to="" style={{ textDecoration: "none" }}>
                        <li className="nav-item">
                            <span className="nav-link">Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default UserNav;
