import room1 from "../hotel_assets/images/details-1.jpeg";
import room2 from "../hotel_assets/images/details-2.jpeg";
import room3 from "../hotel_assets/images/details-3.jpeg";
import room4 from "../hotel_assets/images/details-4.jpeg";
import img1 from "../hotel_assets/images/room-1.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect, Component } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from "@material-ui/core/Box";
import flightData from "./flights.json";
import "./flights.css";

const hotelData = [
    {
        sys: {
            id: "1"
        },
        fields: {
            name: "Büyük Hotel",
            slug: "single-economy",
            type: "single",
            price: 100,
            size: 200,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:
                "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
                "Plush pillows and breathable bed linens",
                "Soft, oversized bath towels",
                "Full-sized, pH-balanced toiletries",
                "Complimentary refreshments",
                "Adequate safety/security",
                "Internet",
                "Comfortable beds"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room4
                        }
                    }
                }
            ]
        }
    }
];

// var treatments = [];

export default function ReservationUI(props) {
    const [treatment, setTreatmentValue] = React.useState("");
    const [expanded, setExpanded] = React.useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [hotelID, setHotelID] = useState(0);

    // console.log("props:" + props)

    // useEffect(() =>{
    //      treatments = this.props.location.data.information.treatments;
    // },[])

    // const treatments = [
    //     {
    //         priceLow: "$199 ",
    //         priceHigh: "$299",
    //         name: "TREATMENT 1"
    //     },
    //     {
    //         priceLow: "$205",
    //         priceHigh: "$350",
    //         name: "TREATMENT 2"
    //     },
    //     {
    //         priceLow: "$399",
    //         priceHigh: "$599",
    //         name: "TREATMENT 3"
    //     },
    //     {
    //         priceLow: "$299",
    //         priceHigh: "$350",
    //         name: "TREATMENT 4"
    //     }
    // ];
    const useStyles = makeStyles(theme => ({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: 200
            }
        }
    }));

    const useStyles2 = makeStyles(theme => ({
        card: {
            maxWidth: 345
        },
        media: {
            height: 0,
            paddingTop: "56.25%" // 16:9
        },
        expand: {
            transform: "rotate(0deg)",
            marginLeft: "auto",
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest
            })
        },
        expandOpen: {
            transform: "rotate(180deg)"
        },
        avatar: {
            backgroundColor: red[500]
        }
    }));

    const classes = useStyles();
    const classes2 = useStyles2();

    const handleChange = event => {
        setTreatmentValue(event.target.value);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleFavoriteClick = id => {
        setHotelID(id);
        console.log("selected hotels index is:" + hotelID);
    };

    return (
        <div>
            <div className="col-12 bg-dark title pt-4 pb-4 pl-5">
                <h4>Set up your reservation for {props.name}</h4>
            </div>
            <div className="container-fluid bg-white col-12 pt-4">
                <div className="offset-1 col-10">
                    <div className="row borderDown">
                        <h3>Choose your treatment date:</h3>
                    </div>
                    <div className="row pt-2 pb-2">
                        <Box component="span" m={1}>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </Box>
                    </div>
                    <div className="row borderDown">
                        <h3>Choose your treatment:</h3>
                    </div>
                    <div className="row pl-2 pt-2 pb-2">
                        <form
                            className={classes.root}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="Select treatment"
                                    value={treatment}
                                    onChange={handleChange}
                                    SelectProps={{
                                        native: true
                                    }}
                                    variant="outlined"
                                >
                                    {props.treatments.map(option => (
                                        <option
                                            key={option.name}
                                            value={option.priceLow}
                                        >
                                            {option.name}
                                        </option>
                                    ))}
                                </TextField>
                                <TextField
                                    id="filled-multiline-flexible"
                                    label="Price for treatment chosen"
                                    multiline
                                    rowsMax="4"
                                    value={treatment}
                                    variant="filled"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="row borderDown">
                                <h3>Check-In Date</h3>
                            </div>
                            <div className="row pt-2 pb-2">
                                <Box component="span" m={1}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                    />
                                </Box>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row borderDown">
                                <h3>Check-Out Date</h3>
                            </div>
                            <div className="row pt-2 pb-2">
                                <Box component="span" m={1}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="row borderDown">
                        <h3>Pick your hotel to stay during your trip:</h3>
                    </div>
                    <div className="row pl-2 pt-4 pb-2">
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={require("../../images/room-1.jpeg")}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div data-toggle="buttons">
                                    <div className="checkbox">
                                        <label className="btn btn-primary">
                                            <input
                                                type="checkbox"
                                                value="1"
                                                name="post[post_facebook]"
                                                id="post_post_facebook"
                                            />
                                            &nbsp;&nbsp; Select
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={require("../../images/room-1.jpeg")}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div data-toggle="buttons">
                                    <div className="checkbox">
                                        <label className="btn btn-primary">
                                            <input
                                                type="checkbox"
                                                value="1"
                                                name="post[post_facebook]"
                                                id="post_post_facebook"
                                            />
                                            &nbsp;&nbsp; Select
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={require("../../images/room-1.jpeg")}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div data-toggle="buttons">
                                    <div className="checkbox">
                                        <label className="btn btn-primary">
                                            <input
                                                type="checkbox"
                                                value="1"
                                                name="post[post_facebook]"
                                                id="post_post_facebook"
                                            />
                                            &nbsp;&nbsp; Select
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={require("../../images/room-1.jpeg")}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div data-toggle="buttons">
                                    <div className="checkbox">
                                        <label className="btn btn-primary">
                                            <input
                                                type="checkbox"
                                                value="1"
                                                name="post[post_facebook]"
                                                id="post_post_facebook"
                                            />
                                            &nbsp;&nbsp; Select
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={require("../../images/room-1.jpeg")}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div data-toggle="buttons">
                                    <div className="checkbox">
                                        <label className="btn btn-primary">
                                            <input
                                                type="checkbox"
                                                value="1"
                                                name="post[post_facebook]"
                                                id="post_post_facebook"
                                            />
                                            &nbsp;&nbsp; Select
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={require("../../images/room-1.jpeg")}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <div data-toggle="buttons">
                                    <div className="checkbox">
                                        <label className="btn btn-primary">
                                            <input
                                                type="checkbox"
                                                value="1"
                                                name="post[post_facebook]"
                                                id="post_post_facebook"
                                            />
                                            &nbsp;&nbsp; Select
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-white col-12">
                <div className="offset-1 col-10 flights">
                    <div className="row pt-5 borderDown">
                        <h3>Select your flight:</h3>
                    </div>
                    <div className="pl-4">
                        <div className="row mt-4">
                            <h6>Chose a flight from the list below:</h6>
                        </div>
                        <div className="pl-4 mt-3">
                            <div className="row">
                                {flightData.flights.map(flight => {
                                    return (
                                        <div key={flight.id}>
                                            <div className="col-3 pb-4">
                                                <div
                                                    class="card"
                                                    style={{ width: "16rem" }}
                                                >
                                                    <div class="card-header">
                                                        <h5>
                                                            {flight.from}
                                                            {" - "}
                                                            {flight.to}
                                                        </h5>
                                                    </div>
                                                    <ul class="list-group list-group-flush">
                                                        <li className="list-group-item">
                                                            <p>
                                                                Date:{" "}
                                                                {flight.date}{" "}
                                                            </p>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <p>
                                                                Time:{" "}
                                                                {flight.time}
                                                            </p>
                                                        </li>
                                                        <li class="list-group-item">
                                                            <p>
                                                                {flight.class}
                                                            </p>
                                                        </li>
                                                        <li class="list-group-item">
                                                            <p>
                                                                {flight.price}
                                                            </p>
                                                        </li>
                                                        <li class="list-group-item">
                                                            <div data-toggle="buttons">
                                                                <div className="checkbox">
                                                                    <label className="btn btn-primary">
                                                                        <input
                                                                            type="checkbox"
                                                                            value="1"
                                                                            name="post[post_facebook]"
                                                                            id="post_post_facebook"
                                                                        />
                                                                        &nbsp;&nbsp;
                                                                        Select
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="row mt-4 pb-5">
                                <a style={{ fontWeight: "bold" }} href="#">
                                    Proceed to payment page
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
