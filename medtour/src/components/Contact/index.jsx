import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import "./contact.css";

class Contact extends Component {
    render() {
        /* filling an array with 18 dummy values in order to use
            it later to print 18 <br /> values to dom. */
        var spaces = [];
        for (var i = 0; i < 18; i++) {
            spaces.push(i);
        }
        return (
            <div>
                <LandingNav />
                <div className="contact w3-animate-opacity">
                    <h3>Contact</h3>
                    <div className="left">
                        {/* the map below is taken from google maps by simply
                    chosing the location from website and pressing share
                    button. From the menu, embed map tab is selected. */}
                        <iframe
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.176242506344!2d32.747441115338844!3d39.87028997943236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe25e255e3294c743!2sBilkent%20%C3%9Cniversitesi%20Bilgisayar%20M%C3%BChendisli%C4%9Fi!5e0!3m2!1str!2str!4v1568736643249!5m2!1str!2str"
                            width="400"
                            height="300"
                            frameborder="0"
                            style={{ border: "0" }}
                            allowfullscreen=""
                        ></iframe>
                    </div>
                    <div className="right">
                        <p>Asaf Kağan Bezgin</p>
                        <p>kagan.bezgin@ug.bilkent.edu.tr</p>
                        <br />
                        <p>Hüseyin Taşkesen</p>
                        <p>huseyin.taskesen@ug.bilkent.edu.tr</p>
                        <br />
                        <p>Akant Atılgan</p>
                        <p>akant.atilgan@ug.bilkent.edu.tr</p>
                        <br />
                        <p>Skerd Xhafa</p>
                        <p>skerd.xhafa@ug.bilkent.edu.tr</p>
                    </div>
                    {/* using spaces array filled above with 18 dummy values
                    to print 18 <br /> to dom. */}
                    {spaces.map(() => (
                        <br />
                    ))}
                </div>
            </div>
        );
    }
}

export default Contact;
