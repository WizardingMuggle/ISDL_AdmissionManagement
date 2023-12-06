import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {

  const adminLogin = '/admin/login'
  
  return (
    <footer className="mu-footer">
      <div className="mu-footer-top">
        <div className="container">
          <div className="mu-footer-top-area">
            <div className="row">
             
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="mu-footer-widget">
                <h4>Contact Details:</h4>
                  <address>
                    <p>The LNM Institute of Information Technology, Jaipur - 302031, India</p>
                    <p>Contact No. (Toll Free): 1800-180-6566</p>
                    <br></br>
                    <p>For Any Admission related query kindly, E-Mail us on:</p>
                    <p>admissionsUndergraduate@lnmiit.ac.in (For B.tech)</p>
                    <p>admissionsMastersEngineering@lnmiit.ac.in (For M.E.)</p>
                    <p>admissionMastersScience@lnmiit.ac.in  (For M.Sc.)</p>
                    <p>admissionPHD@lnmiit.ac.in (For Phd)</p>
                  </address>

                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="mu-footer-widget">
                  <h4>Reach Us:</h4>
                  <div className="line" />
                  <address>
                    <p>The college is well connected by road, rail and air transport through Jaipur city</p>
                      <p>College campus is distanced from following important places as follows:</p>
                      <p>
                    <ul>
                      <li>Railway Station : 17 kms</li>
                      <li>Airport : 23 kms</li>
                      <li>Bus Stand : 16 kms</li>
                    </ul></p>
                    <Button>
                    <a className="image-footer" href="https://www.google.com/maps?ll=26.936346,75.923523&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=IN&amp;mapclient=embed&amp;cid=6536242364884995115" target="_blank" >Campus Location On Google Maps</a>
                    
                    </Button>
                  </address>

                  <div className="social-media">
          <ul className="social-media-desktop" >
            <li>
              <a href="https://www.facebook.com/lnmiit.ac.in" target="_lnmiit">
                <FaFacebookSquare className="social-media-icons" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lnmiit/" target="_lnmiit">
                <FaInstagramSquare className="social-media-icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCBndW-qun8prPOmq5kRFbjw?view_as=subscriber"
                target="_lnmiit"
              >
                <FaYoutubeSquare className="social-media-icons" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/LNMIIT_Jaipur" target="_lnmiit">
                <FaTwitterSquare className="social-media-icons" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        </div>




                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
