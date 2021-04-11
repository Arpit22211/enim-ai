import React from "react";
import "./Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CallIcon from "@material-ui/icons/Call";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="jumbotron bg-dark text-white p-5 mb-0 rounded-0 ">
        <div className="row">
          <div className="col-lg-5 px-4 mb-4">
            <div className=" h3 font-weight-bold">Our Vision</div>
            <hr className="bg-white" />
            <div className="description text-white text-justify">
              Our vision is to provide the best services for development and
              maintenance of web apps,mobile apps,custom software etc.
            </div>
            <br />
          </div>
          <div className="col-lg-3 px-4 mb-4">
            <div className=" h3 font-weight-bold">Keep Connected</div>
            <hr className="bg-white" />
            <div className="description-1 mx-auto">
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 facebook">
                      <Avatar>
                        <FacebookIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Like us on Facebook</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 twitter">
                      <Avatar>
                        <TwitterIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Follow us on Twitter</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 instagram">
                      <Avatar>
                        <InstagramIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Follow us on Instagram</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 youtube">
                      <Avatar>
                        <YouTubeIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Suscribe on YouTube</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 px-4 mb-4">
            <div className=" h3 font-weight-bold">Contact Information</div>
            <hr className="bg-white" />
            <div className="description-1 mx-auto">
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 call">
                      <Avatar>
                        <CallIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">+91 6758465739</div>
                  </Link>
                </div>
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 home">
                      <Avatar>
                        <HomeIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">
                      sector-6,Hisar , Haryana, India
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-flex rounded-0  m-0 p-2 text-white text-center copyright">
        &#169; 2020 copyright{" "}
        <Link className="text-decoration-none text-white" to="/">
          Enim-AI.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
