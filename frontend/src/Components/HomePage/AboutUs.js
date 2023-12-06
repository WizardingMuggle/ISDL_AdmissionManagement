import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import i1 from "../../Assets/AboutUS.jpg";
import "./AboutUs.css";

const AboutUs = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="home-about-us">
            <div className="home-about-us-container">
                <div className="home-about-us-title">
                    <h2 className="home-about-us-h2">
                        ABOUT US:
                    </h2>
                </div>
                <div className="home-about-us-box">
                    <div className="col-lg-6 col-md-6">
                        <div className="home-about-us-box-left">
                        <div id="visible-text" className="para">
                                    <p>It is well recognized that the LNMIIT is a university that values equality, diversity, and merit. It was established in late 2002 as a joint enterprise under the private-public partnership model through cooperation between the Rajasthani government and the renowned billionaire and philanthropist Mr. Lakshmi Niwas Mittal's Lakshmi and Usha Mittal Foundation. As of this writing, the Institute hopes to become a purpose-driven research institution with a focus on outreach, entrepreneurship, deep industry involvement, research, teaching-learning, and teaching through the Quantum Leap project.

Our motivation at LNMIIT Jaipur comes from a strong sense of purpose. You are cordially invited to our small universe. Should you be unfamiliar with this region of the world, kindly feel free to
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="home-about-us-box-right">
                            <img src={i1} className="home-about-us-box-pict" alt="Photo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;