import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect, Component } from "react";
import { red } from "@material-ui/core/colors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from "@material-ui/core/Box";
import flightData from "./flights.json";
import hotelData from "./hotels.json";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./reservation.css";

function goToPaymentPage(apiUserId, apiTreatmentId, apiClinicId, treatmentReservedDate, selectedHotel, selectedFlight , clinicName, clinicAddress, tName, tPrice){

    var u_id = apiUserId;
    var t_id = apiTreatmentId;
    var c_id = apiClinicId;

    var td = new Date(treatmentReservedDate);

    var tYear = td.getFullYear();
    var tMonth = td.getMonth();
    if( tMonth < 10){
        tMonth = "0" + (tMonth+1);
    }
    else{
        tMonth = tMonth +1;
    }

    var tDay = td.getDate();
    if( tDay < 10){
        tDay = "0" + (tDay);
    }

    var treatment_Date = tYear+ '-' + tMonth + '-' + tDay + "T00:00:00.000+00:00";

    if( t_id != ""){
        var departure_one = "";
        var location_one = "";
        var type_one = "";
        var price_one = "";
        var currency_one = "";

        var departure_two = "";
        var location_two = "";
        var type_two = "";
        var price_two = "";
        var currency_two = "";

        var name = "";
        var location = "";
        var type = "";
        var rating = "";
        var price = "";
        var currency = "";
        var checkIn = "";
        var checkOut = "";

        if( selectedFlight.length == 0){
            // alert("emptyFlight");
        }
        else{
            var i = 0;
            departure_one = selectedFlight[i++];
            location_one = selectedFlight[i++];
            type_one = selectedFlight[i++];
            price_one = selectedFlight[i++];
            currency_one = selectedFlight[i++];

            departure_two = selectedFlight[i++];
            location_two = selectedFlight[i++];
            type_two = selectedFlight[i++];
            price_two = selectedFlight[i++];
            currency_two = selectedFlight[i++];
        }

        if( selectedHotel.length == 0){
            // alert("empty hotel");
        }
        else{
            var i = 0;
            name = selectedHotel[i++];
            location = selectedHotel[i++];
            type = selectedHotel[i++];
            rating = selectedHotel[i++];
            price = selectedHotel[i++];
            currency = selectedHotel[i++];
            checkIn = selectedHotel[i++];
            checkOut = selectedHotel[i++];
        }
    }
    else{
        // alert("No treatment selected");
    }

    //Headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }

    var treatment_Name_Send = tName;
    var treatment_Price_Send = tPrice;

    //alert( treatment_Name_Send + " = " + treatment_Price_Send );

    //Request body
    const body = {
        u_id,
        t_id,
        c_id,

        treatment_Date,
        treatment_Name_Send,
        treatment_Price_Send,
        clinicName, 
        clinicAddress,
        
        departure_one,
        location_one,
        type_one,
        price_one,
        currency_one,
        
        departure_two,
        location_two,
        type_two,
        price_two,
        currency_two,
        
        name,
        location,
        type,
        rating,
        price,
        currency,
        checkIn,
        checkOut
    };

    var infoPack =[ body, config ];

    return infoPack;
}

function filerWithNewDate(hotels, date, type, checkIn, checkOut){


    if( date == null){
        return hotels;
    } else {
        var filteredHotels = hotels.filter(function(hotel) {
            var earliestDate = new Date(hotel.availableFrom);
            var latestDate = new Date(hotel.availableTo);

            if (checkIn != undefined && checkOut == undefined) {
                return (
                    earliestDate <= checkIn.getTime() &&
                    latestDate.getTime() >= checkIn.getTime()
                );
            } else if (checkIn == undefined && checkOut != undefined) {
                return (
                    latestDate.getTime() >= checkOut.getTime() &&
                    earliestDate.getTime() <= checkOut.getTime()
                );
            } else if (checkIn != undefined && checkOut != undefined) {
                return (
                    latestDate.getTime() >= checkOut.getTime() &&
                    earliestDate.getTime() <= checkIn.getTime()
                );
            }
        });
        return filteredHotels;
    }
}

function filerWithNewDateFlights(flights, date, type, departure, returnD)
{
    if( date == null){
        return flights;
    }
    else {
        //alert( "[" + departure + "][" + returnD+ "]");

        var filteredFlights = flights.filter(function (flights) {

            var departuretDate = new Date(flights.outboundDate);
            var returnDate = new Date(flights.returnDate);

            if( departure != undefined && returnD == undefined){
                return ( departuretDate  <= departure.getTime() && returnDate.getTime() >= departure.getTime());
            }
            else if( departure == undefined && returnD != undefined){
                return ( returnDate.getTime() >= returnD.getTime() && departuretDate.getTime() <= returnD.getTime());
            }
            else if( departure != undefined && returnD != undefined ){
                return ( returnDate.getTime() >= returnD.getTime() && departuretDate.getTime() <= departure.getTime() );
            }
        });
        return filteredFlights;
    }
}

export default function ReservationUI(props) 
{
    const [treatment, setTreatmentValue] = useState(0);
    
    const [expanded, setExpanded] = useState(false);
    const [treatmentReservedDate, setTreatmentReservedDate] = useState(Date.now);
    const [apiTreatmentId, setApiTreatmentId] = useState("");
    const [tourPrice, setTourPrice] = useState( 0 );
    const [startCheckInDate, setStartCheckInDate] = useState();
    const [starCheckOutDate, setStartCheckOutDate] = useState();
    const [showHotels, changeHotelsToggle] = useState( false );
    const [hotels, filterHotels] = useState( filerWithNewDate( hotelData, null, null) );
    const [selectedHotel, changeSelectedHotel] = useState( [] );
    const [departureDate, setDepartureDate] = useState();
    const [returnDate, setReturnDate] = useState();
    const [showFlights, changeFlightsToggle] = useState( false );
    const [flights, filterFlights] = useState( filerWithNewDateFlights( flightData, null, null) );
    const [selectedFlight, changeSelectedFlight] = useState([]);
    const [flightId, setFlightId] = useState();
    const [whatHotelIsSelectedCanIKnow, setWhatHotelIsSelectedCanIKnow] = useState(-1);

    const [treatmentNameS, setTreatmentNameS] = useState("");
    const [treatmentNameS1, setTreatmentNameS1] = useState("");

    const [treatment1, setTreatmentValue1] = useState(0);


    const useStyles = makeStyles(theme => ({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: 200
            }
        }
    }));

    const classes = useStyles();

    const handleChange = event => {

        var optionValue = event.target.value + "";
        var valuesArray = optionValue.split("~");
        var aaa= valuesArray[2] + "";
        setTreatmentNameS( aaa );
        setTreatmentNameS1();
        var oldTreatmentPrice = parseInt(treatment);
        var totalTourPrice = parseInt(tourPrice) - oldTreatmentPrice;
        
        setTreatmentValue(valuesArray[0]);
        setTreatmentValue1( valuesArray[0] );
        
        setApiTreatmentId( valuesArray[1]);

        //alert("[" + valuesArray[0]  + "][" + valuesArray[1] + "][" + valuesArray[2] + "]" + treatmentNameS);

        //alert("[" + tourPrice + "][" + oldTreatmentPrice + "][" + treatment + "][" + valuesArray[1] + "]");
        totalTourPrice = parseInt(totalTourPrice) + parseInt(event.target.value);
        setTourPrice(totalTourPrice);

    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    var apiUserId = props.userId;
    var apiClinicId = props.clinicInformation.clinicId;
    var clinicAddress = props.clinicInformation.clinicAddress;
    var treatments = props.treatmentsInformation;
    var clinicName = props.clinicInformation.clinicName;    

    return (

        <div>
            <div className="col-12 bg-dark title pt-4 pb-4 pl-5">
                <h4>Set up your reservation for {clinicName}</h4>
            </div>

            <div className="container-fluid bg-white pt-4">
                <div className="offset-1 col-10">
                    <div className="row borderDown">
                        <h3>Treatment Information:</h3>
                    </div>
                    <div className="row">
                        
                        <div class="col-md-3 col-sm-6 mt-3 mb-3 ">
                            <h4>Date:</h4>
                            <Box component="span" m={1}>
                                <DatePicker
                                    selected={treatmentReservedDate}
                                    dateFormat="dd-MM-yyyy"
                                    onChange={date => {  setTreatmentReservedDate(date);  }  }
                                />
                            </Box>
                            {/* <div>{treatmentDate}</div> */}
                        </div>

                        <div class="col-md-3 col-sm-6 mt-3 mb-3 ">
                            <h4>Treatment Name:</h4>
                            <div> 
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
                                                label="Select Treatment"
                                                value= {treatmentNameS1}
                                                onChange={handleChange}
                                                SelectProps={{
                                                    native: true
                                                }}
                                                variant="outlined"
                                            >
                                                {treatments.map(option => (
                                                    <option
                                                        key={option.name}
                                                        value={option.priceLow + "~" + option._id + "~" + option.name}
                                                    >
                                                        {option.name}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6 mt-3 mb-3 ">
                            <h4>Treatment Price:</h4>
                                <div>{treatment} USD</div>
                        </div>

                        <div class="col-md-3 col-sm-6 mt-3 mb-3 ">
                            <h4>Tour Total Price:</h4>
                                <div>{tourPrice} USD</div>
                        </div>

                    </div>
                    <br></br>

                    <div class="row borderDown">
                            <h3> Accomodation Information:</h3> &nbsp;&nbsp;&nbsp;&nbsp;
                            
                            {showHotels ? 
                                <button type="button" class="btn btn-danger" onClick={ click => {
                                    
                                    changeHotelsToggle( !showHotels ); 

                                    var totalDaysInHotel = selectedHotel[8];
                                    var hotelPrice = selectedHotel[4];

                                    var newTourPrice = parseInt(tourPrice) - (parseInt(totalDaysInHotel)*parseInt(hotelPrice));
                                    
                                    setTourPrice( newTourPrice );

                                    changeSelectedHotel([]);

                                    setWhatHotelIsSelectedCanIKnow(-1);
                                            
                                } }>Remove Hotel Selection</button>
                                :
                                <button type="button" class="btn btn-success" onClick={ click => { changeHotelsToggle( !showHotels );  } }>Click to select Hotel</button>
                            }

                            {showHotels ? 
                                <div class="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="row borderDown">
                                                <h3>Check-In Date</h3>
                                            </div>
                                            <div className="row pt-2 pb-2">
                                                <Box component="span" m={1}>
                                                    <DatePicker
                                                        selected={startCheckInDate}
                                                        dateFormat="dd-MM-yyyy"
                                                        onChange={date => {  setStartCheckInDate(date); filterHotels ( filerWithNewDate( hotelData, date, "check-in", date, starCheckOutDate  ) );  } }
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
                                                        selected={starCheckOutDate}
                                                        dateFormat="dd-MM-yyyy"
                                                        onChange={date => {  setStartCheckOutDate(date); filterHotels ( filerWithNewDate( hotelData, date, "check-out" , startCheckInDate, date ) );  }}
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row borderDown">
                                        <h3>Pick your hotel to stay during your trip:</h3>
                                    </div>
                                    <div className="row pl-4 pt-4 pb-2">
                                        {hotels.map(hotel => {
                                            var fromDate = new Date(hotel.availableFrom);
                                            var from = fromDate.getDate() + "/" + (fromDate.getUTCMonth() + 1) + "/" + fromDate.getFullYear();

                                            var toDate = new Date(hotel.availableTo);
                                            var to = toDate.getDate() + "/" + (toDate.getUTCMonth()+1 ) + "/" + toDate.getFullYear();

                                            var hotelIdSingle = hotel.id;
                                            var hotelName = hotel.name;
                                            var hotelRoom = hotel.room;
                                            var hotelPrice = hotel.price;
                                            var hotelLocation = hotel.location;
                                            var hotelType = hotel.type;
                                            var hotelRating = hotel.rating;
                                            var hotelCurrency = hotel.currency;

                                            return (
                                                <div key={hotelIdSingle}>
                                                    <div
                                                        className="card mr-4 mb-4"
                                                        style={{ width: "18rem" }}
                                                    >
                                                        <img
                                                            src={require("../../images/room-1.jpeg")}
                                                            className="card-img-top"
                                                            alt="..."
                                                        />
                                                        <div className="card-header">
                                                            <h5>{hotelName}</h5>
                                                        </div>
                                                        <ul className="list-group list-group-flush">
                                                            <li className="list-group-item">
                                                                <p>
                                                                    {" Available From: "}
                                                                    {from}
                                                                    <br />
                                                                    {" Until: "}
                                                                    {to}
                                                                </p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p>
                                                                    {"Room left: "}
                                                                    {hotelRoom}
                                                                </p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <p>
                                                                    {"Price for one night: "}
                                                                    {hotelPrice}
                                                                </p>
                                                            </li>
                                                            <li className="list-group-item">
                                                                {whatHotelIsSelectedCanIKnow != hotelIdSingle ? 
                                                                    <button type="button" class="btn btn-danger" onClick={ click => {

                                                                        if( startCheckInDate!= undefined && starCheckOutDate != undefined){

                                                                            var checkInDate =  new Date(startCheckInDate);
                                                                            var ciYear = checkInDate.getFullYear();
                                                                            var ciMonth = checkInDate.getMonth();
                                                                            if( ciMonth < 10){
                                                                                ciMonth = "0" + (ciMonth+1);
                                                                            }
                                                                            else{
                                                                                ciMonth = ciMonth +1;
                                                                            }

                                                                            var ciDay = checkInDate.getDate();
                                                                            if( ciDay < 10){
                                                                                ciDay = "0" + (ciDay);
                                                                            }

                                                                            var apiCheckInDate = ciYear+ '-' + ciMonth + '-' + ciDay + "T00:00:00.000+00:00";

                                                                            var checkoutDate =  new Date(starCheckOutDate);
                                                                            var coYear = checkoutDate.getFullYear();
                                                                            var coMonth = checkoutDate.getMonth();
                                                                            if( coMonth < 10){
                                                                                coMonth = "0" + (coMonth+1);
                                                                            }
                                                                            else{
                                                                                coMonth = coMonth +1;
                                                                            }

                                                                            var coDay = checkoutDate.getDate();
                                                                            if( coDay < 10){
                                                                                coDay = "0" + (coDay);
                                                                            }

                                                                            var hotelStayDaysString = ( ( checkoutDate.getTime() - checkInDate.getTime() ) / ( 1000 * 3600 * 24)  ) + "" ;
                                                                            var hotelStayDays = parseInt( hotelStayDaysString , 10 ) ;
                                                                            var apiCheckOutDate = coYear+ '-' + coMonth + '-' + coDay + "T00:00:00.000+00:00";

                                                                        //alert( JSON.stringify( selectedNewHotel) );
                                                                        
                                                                            changeSelectedHotel( [
                                                                                hotelName,
                                                                                hotelLocation,
                                                                                hotelType,
                                                                                hotelRating,
                                                                                hotelPrice,
                                                                                hotelCurrency,
                                                                                apiCheckInDate,
                                                                                apiCheckOutDate,
                                                                                hotelStayDays
                                                                            ]
                                                                                
                                                                            );

                                                                            var newTourPrice = parseInt(tourPrice) + (hotelStayDays*parseInt(hotelPrice));
                                                                            //alert( hotelStayDays );
                                                                            setTourPrice( newTourPrice  );
                                                                            
                                                                            setWhatHotelIsSelectedCanIKnow( hotelIdSingle );
                                                                        }

                                                                    } }>  Select Hotel </button>
                                                                    :
                                                                    <button type="button" class="btn btn-success" > Selected </button>
                                                                }
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                :
                                null
                            }
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div class="row borderDown">
                            <h3> Transportation Information:</h3> &nbsp;&nbsp;&nbsp;&nbsp;
                            <br></br>
                            {showFlights ? 
                                <button type="button" class="btn btn-danger" onClick={ click => {
                                    changeFlightsToggle( !showFlights ); 

                                    setFlightId(-1);

                                    var departurePrice = selectedFlight[3];
                                    var returnPrice = selectedFlight[8];

                                    var newTourPrice = parseInt(tourPrice) - (parseInt(departurePrice) + parseInt(returnPrice));
                                    setTourPrice( newTourPrice );

                                    changeSelectedFlight([]);
                                
                                } }>Remove Transportation Selection</button>
                                :
                                <button type="button" class="btn btn-success" onClick={ click => { changeFlightsToggle( !showFlights );  } }>Clik to select Transportation</button>
                            }

                            {showFlights ? 
                                <div class="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="row borderDown">
                                                <h3>Departure Date</h3>
                                            </div>
                                            <div className="row pt-2 pb-2">
                                                <Box component="span" m={1}>
                                                    <DatePicker
                                                        selected={departureDate}
                                                        dateFormat="dd-MM-yyyy"
                                                        onChange={date => {  setDepartureDate(date); filterFlights ( filerWithNewDateFlights( flightData, date, "departure", date, returnDate ) );  } }
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="row borderDown">
                                                <h3>Return Date</h3>
                                            </div>
                                            <div className="row pt-2 pb-2">
                                                <Box component="span" m={1}>
                                                    <DatePicker
                                                        selected={returnDate}
                                                        dateFormat="dd-MM-yyyy"
                                                        onChange={date => {  setReturnDate(date); filterFlights ( filerWithNewDateFlights( flightData, date, "return" , departureDate, date ) );  }}
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row  borderDown">
                                        <h3>Select your flight:</h3>
                                    </div>

                                    <div className="pl-4">
                                        <div className="row mt-4">
                                            <h6>Chose a flight from the list below:</h6>
                                        </div>
                                        <div className="pl-4 mt-3">
                                            <div className="row">
                                                {flights.map(flight => {

                                                    var flightIdSingle = flight.id;
                                                    var outboundDate = new Date(flight.outboundDate);
                                                    var outbound = outboundDate.getFullYear() + "-" + (outboundDate.getUTCMonth() + 1) + "-" + outboundDate.getDate();

                                                    var returnDate = new Date(flight.returnDate);
                                                    var returnD = returnDate.getFullYear() + "-" + (returnDate.getUTCMonth()+1 ) + "-" + returnDate.getDate();

                                                    var departure_one = outbound + "T" + flight.outTime + ":00.000+00:00";
                                                    var location_one = flight.from;
                                                    var type_one = flight.class;
                                                    var price_one = flight.outboundPrice;
                                                    var currency_one = flight.outboundCurrency;

                                                    var departure_two = returnD + "T" + flight.returnTime + ":00.000+00:00";
                                                    var location_two = flight.to;
                                                    var type_two = flight.class;
                                                    var price_two = flight.returnPrice;
                                                    var currency_two = flight.returnCurrency;

                                                    return (
                                                        <div key={flight.id}>
                                                            <div className="col-3 pb-4">
                                                                <div
                                                                    className="card"
                                                                    style={{ width: "16rem" }}
                                                                >
                                                                    <div className="card-header">
                                                                        <h5>
                                                                            {flight.from}
                                                                            {" - "}
                                                                            {flight.to}
                                                                        </h5>
                                                                    </div>
                                                                    <ul className="list-group list-group-flush">
                                                                        <li className="list-group-item">
                                                                            <p>
                                                                                Outbound:{" "}
                                                                                {
                                                                                    outbound
                                                                                }
                                                                                <br />
                                                                                Time:{" "}
                                                                                {flight.outTime}
                                                                                <br></br>
                                                                                Price:{"      "}
                                                                                {price_one + " " + currency_one}
                                                                            </p>
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            <p>
                                                                                Return:{" "}
                                                                                {
                                                                                    returnD
                                                                                }
                                                                                <br />
                                                                                Time:{" "}
                                                                                {
                                                                                    flight.returnTime
                                                                                }
                                                                                <br></br>
                                                                                Price:{" "}
                                                                                {price_two + " " + currency_two}
                                                                            </p>
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            <p>
                                                                                {flight.class}
                                                                            </p>
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            <p>
                                                                            Total Price: {" "}
                                                                            { (parseInt(price_one) + parseInt(price_two)) + " " + currency_one}
                                                                            </p>
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            <div data-toggle="buttons">
                                                                                <div className="checkbox">

                                                                                
                                                                                {flightId != flightIdSingle ? 
                                                                                    <button type="button" class="btn btn-danger" onClick={ click => {

                                                                                        if( departureDate!= undefined && returnDate != undefined){

                                                                                            changeSelectedFlight( [
                                                                                                departure_one,
                                                                                                location_one,
                                                                                                type_one,
                                                                                                price_one,
                                                                                                currency_one,
                                            
                                                                                                departure_two,
                                                                                                location_two,
                                                                                                type_two,
                                                                                                price_two,
                                                                                                currency_two
                                                                                            ]
                                                                                                
                                                                                            );
    
                                                                                            var newTourPrice = parseInt(tourPrice) + (parseInt(price_one) + parseInt(price_two));
                                                                                            setTourPrice( newTourPrice );
                                                                                            setFlightId( flightIdSingle);

                                                                                        }

                                                                                    } }>  Select Flight </button>
                                                                                    :
                                                                                    <button type="button" class="btn btn-success" > Selected </button>
                                                                                }

                                                                                
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
                                            </div>
                                        </div>
                                    </div>
                
                                </div>
                                :
                                null
                            }
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div class="row ">
                        <div class="col-6 text-center">
                        <Link to={{ pathname: "/payment", data: goToPaymentPage(apiUserId, apiTreatmentId, apiClinicId, treatmentReservedDate, selectedHotel, selectedFlight, clinicName, clinicAddress, treatmentNameS, treatment1)  }} className="card-link">
                            <button class="btn btn-success"> Confirm Treatment Tour</button>
                        </Link>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    );
}