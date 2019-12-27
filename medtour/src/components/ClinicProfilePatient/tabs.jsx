import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import "./tabs.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "white"
    }
}));

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    var treatments = props.information.treatments;
    var reviews = props.information.reviews;
    var ratingAverage = props.information.ratingAverage;
    var bio = props.bio;

    var clinic_id = props.information.clinic_id

    console.log('CLINIC ID FROM PROPS:'+clinic_id)

    localStorage.setItem("clinicID", clinic_id);

    const c_id = localStorage.getItem("clinicID");
  

    const treatment_details = treatments.map(treatment => {
        return (
            <div class="col-12">
                <tr class="row text-left">
                        <td class="col-md-6 col-sm-12"> {treatment["name"]} </td>
                        <td class="col-md-4 col-sm-8"> {treatment["priceLow"]} - {treatment["priceHigh"]} {treatment["currency"]}</td>
                        <td class="col-md-2 col-sm-3">
                            <button class="btn btn-success mb-1"> Contact</button>    
                        </td>
                </tr >
            </div>
        );
    });

    const review_details = reviews.map(review => {
        var date = ((review.date) + "" ).substr( 0, ((review.date) + "" ).indexOf("T")  );

        return (
            <div class="card w-100  mx-0 my-2 ">
                <div class="">
                    <div class="col-12">
                        <div class=" card-header row  text-left text-weight-bold">
                            <div class="col-6 mx-0 px-0">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="spaceRight">
                                            <h3> {review.name} </h3>
                                        </div>
                                        <div class="mx-0 my-0">
                                            <StarRatings
                                              
                                                rating={ review.rating }

                                                starRatedColor="red"
                                                numberOfStars={5}
                                                starDimension="20px"
                                                starSpacing="2px"
                                                name="rating"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-6 text-right"> Date: {date} </div>
                        </div>
                        <div class="col-12 mx-0 px-0">Review: </div>
                    </div>

                    <div class="col-12 text-left ">
                        {review.comment}
                        {/* <div class="underlineIt text-muted">
                            Read Mode
                        </div> */}
                    </div>
                </div>

                <br></br>
            </div>
        );
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className="container-fluid name bg-dark">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        {/* <h5>{clinic_address}</h5> */}
                    </div>
                </div>
            </div>
            <AppBar position="static" style={{ background: "darkred" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    style={{
                        margin: "0 0 0 10%",
                        color: "white"
                    }}
                >
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Review" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div class="container-fluid">
                    <br></br>
                    <div class="col-md-8 col-sm-12 offset-0 offset-md-2 p-0">
                        <div class="row">
                            <div class="col-8">
                                <div class="row">
                                    <h3>About Us:</h3>
                                    <div class="col-12 pl-3">
                                        {bio}
                                    </div>
                                </div>
                                <br></br>
                                <div class="row">
                                    <h3>Treatments</h3>
                                    {treatment_details}
                                </div>
                            </div>

                            <div class="col-4">
                                <div class="col-12 mb-3">
                                    <StarRatings
                                        rating={ ratingAverage}
                                        starRatedColor="red"
                                        numberOfStars={5}
                                        starDimension="20px"
                                        starSpacing="2px"
                                        name='rating'
                                    />
                                </div>
                                <div class="col-12">
                                    <img
                                        class="mw-100"
                                        id="clinic-wide"
                                        src={require("../../images/clinic-wide.jpg")}
                                        alt="clinic"
                                    ></img>
                                </div>
                            </div>
                        </div>

                        <br></br>

                        <div class="row">
                            <div class="col-2 offset-2">
                                
                                <Link className="btn btn-warning" to={{
                                    pathname:'/chat'
                                }}
                                >Enquire
                                </Link>
                            </div>
                            <div class="col-4">
                                <Link
                                    className="btn btn-success"
                                    to={{
                                        pathname: "/reservation",
                                        data: props
                                    }}
                                >
                                    Make a Reservation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="col-8 offset-2 pb-5">
                    <div className="row pb-3 pt-3">
                        <h3>Comments From Users</h3>
                    </div>
                    {review_details}
                </div>
            </TabPanel>
        </div>
    );
}
