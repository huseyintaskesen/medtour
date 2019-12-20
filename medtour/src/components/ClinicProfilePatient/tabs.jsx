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

const theme = createMuiTheme({
    palette: {
        primary: purple
    }
});

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

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: "darkred" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    style={{
                        margin: "0 0 0 10%",
                        color: "white"
                    }}
                    indicatorColor="white"
                >
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Review" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="col-8 offset-2 treatments">
                    <div className="row pb-3 pt-3">
                        <h3>Treatments</h3>
                    </div>
                    <div className="row">
                        <div className="col-3 pt-4">
                            <p>Hair Removal</p>
                            <p>Teeth Implant</p>
                            <p>Open Heart Surgery</p>
                            <p>Skin Cancer</p>
                            <p>Breast Implant</p>
                            <p>Eye Surgery</p>
                        </div>
                        <div className="col-3 pt-4">
                            <p>100$</p>
                            <p>200$</p>
                            <p>500$</p>
                            <p>100$</p>
                            <p>300$</p>
                            <p>1000$</p>
                        </div>
                        <div className="col-6 clinic-image">
                            <div className="col-12">
                                <img
                                    id="clinic-wide"
                                    src={require("../../images/clinic-wide.jpg")}
                                    alt="clinic"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4 pl-2">
                        <button className="btn btn-success">
                            Make a Reservation
                        </button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="col-8 offset-2 pb-5">
                    <div className="row pb-3 pt-3">
                        <h3>Comments From Users</h3>
                    </div>
                    <div className="row pl-2 pt-4 pb-3">
                        <div clasName="row">
                            <h5>Asaf Kağan Bezgin</h5>
                        </div>
                    </div>
                    <div className="row pl-4">
                        <p>
                            Kliniklerin en güzeli. Ahmet abi çok yardımcı oldu.
                        </p>
                    </div>
                    <div className="row pl-2 pt-4 pb-3">
                        <div clasName="row">
                            <h5>Hüseyin Taşkesen</h5>
                        </div>
                    </div>
                    <div className="row pl-4">
                        <p>Çok mutsuzum. Dişim elimde dönüyorum.</p>
                    </div>
                    <div className="row pl-2 pt-4 pb-3">
                        <div clasName="row">
                            <h5>Skerd Xhafa</h5>
                        </div>
                    </div>
                    <div className="row pl-4">
                        <p>Turkish tea sucks.</p>
                    </div>
                </div>
            </TabPanel>
        </div>
    );
}
