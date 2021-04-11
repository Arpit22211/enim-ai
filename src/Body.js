import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import ContactForm from "./ContactForm";
import image1 from "./images/image1.jpg";
import image2 from "./images/sp2.jpeg";
import image3 from "./images/sp3.jpeg";
import image4 from "./images/sp4.jpeg";
import image5 from "./images/sp1 .jpeg";
import image6 from "./images/b1.jpg";
import image7 from "./images/s1.png";
import image8 from "./images/s2.jpg";
import image9 from "./images/s3.png";
import image10 from "./images/s4.png";
import image11 from "./images/s6.jpg";

function Body() {
  return (
    <div>
      <div className="jumbotron p-0 m-0 bg-white full">
        <div className="row m-0">
          <div className="col-lg-6 col-sm-12 p-4  d-flex flex-column justify-content-center  description-box content">
            <p className="para">
              We craft digital products for business and user goals.
            </p>
            <h1 style={{ fontFamily: "Ubuntu" }}>
              Full-Cycle Software Development Company
            </h1>
            <p className="para2">
              Perfect development solution for growing startups,established
              bussiness and outdated software.
            </p>
            <div className="d-flex ">
              <Link className=" btn  p-3 hover-buttons" to="/">
                Start Project.
              </Link>
              <Link className=" btn  p-3  ml-4 hover-buttons1" to="/">
                Our Work
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-sm-12 m-0 d-lg-block d-none p-0 banner"
            style={{ backgroundImage: `url(${image1})` }}
          />
          <div
            className="d-lg-none col-sm-12 p-0 banner1"
            style={{ backgroundImage: `url(${image1})` }}
          />
        </div>
      </div>
      <div className="sponsor_full">
        <div className="d-flex justify-content-center mt-2">
          <p className="sponsor text-align-center">Our Sponsor</p>
        </div>
        <div className="row justify-content-space-center mt-4  m-0">
          <div className="col-lg-3 d-flex justify-content-center col-sm-12 mb-4">
            <img className="image" src={image2} />
          </div>
          <div className="col-lg-3 d-flex justify-content-center col-sm-12 mb-4">
            <img className="image" src={image3} />
          </div>
          <div className="col-lg-3 d-flex justify-content-center col-sm-12 mb-4">
            <img className="image" src={image4} />
          </div>
          <div className="col-lg-3 d-flex justify-content-center col-sm-12 mb-4">
            <img className="image" src={image5} />
          </div>
        </div>
      </div>
      <div className="jumbotron p-0 m-0 bg-white">
        <div className="d-flex justify-content-center">
          <p className="bg-white sponsor">Our Services..</p>
        </div>
        <div className="row m-0">
          <div
            className="col-lg-6 col-sm-12 p-0 banner2"
            style={{ backgroundImage: `url(${image7})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1 className="text-dark" style={{ fontFamily: "Balsamiq Sans" }}>
              UI-UX Design
            </h1>
            <p>
              Enim-AI presents the special creative field for UX designers:
              here's the collection of diverse web and mobile design concepts
              for customer-friendly interfaces.When designing in the e-commerce
              space, there are a number of psychological phenomena to consider.
              These will have varying impacts on your personal work, but I think
              on a larger scale, learning about human behavior is crucial to
              good UX.Enim-AI provides the best practices to develop Ui/Ux
              design.Give it a try and become a permanent customer.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons1" to="/">
              Explore More..
            </Link>
          </div>
        </div>
        <div className="row m-0">
          <div
            className="d-lg-none col-sm-12 p-0 banner2"
            style={{ backgroundImage: `url(${image8})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1 className="text-dark" style={{ fontFamily: "Balsamiq Sans" }}>
              Mobile App Development
            </h1>
            <p>
              Mobile app development is the creation of software intended to run
              on mobile devices and optimized to take advantage of those
              products' unique features and hardware. The types of mobile apps
              that developers create include native apps, hybrid apps and HTML5
              apps.Enim-AI provides the best practices to develop and maintain
              mobile app development.Give it a try and become a permanent
              customer.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons1" to="/">
              Explore More..
            </Link>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none p-0 banner2"
            style={{ backgroundImage: `url(${image8})` }}
          />
        </div>
        <div className="row m-0">
          <div
            className="col-lg-6 col-sm-12 p-0 banner2"
            style={{ backgroundImage: `url(${image9})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1 className="text-dark" style={{ fontFamily: "Balsamiq Sans" }}>
              Web Development
            </h1>
            <p>
              Web development is the building and maintenance of websites; it's
              the work that happens behind the scenes to make a website look
              great, work fast and perform well with a seamless user experience.
              Web developers, or 'devs', do this by using a variety of coding
              languages.Enim-AI provides the best practices to develop and
              maintain web app development.Give it a try and become a permanent
              customer.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons1" to="/">
              Explore More..
            </Link>
          </div>
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <div
              className="d-lg-none col-sm-12 p-0 banner2"
              style={{ backgroundImage: `url(${image10})` }}
            />
            <h1 className="text-dark" style={{ fontFamily: "Balsamiq Sans" }}>
              Custom Software Development
            </h1>
            <p>
              Custom software development is the designing of software
              applications for a specific user or group of users within an
              organization. Such software is designed to specifically address
              these users' needs better than more traditional and widespread
              off-the-shelf software can. Custom software is typically created
              just for these specific users by a third-party or in-house group
              of developers and is not packaged for resale.Enim-AI provides the
              best practices to develop and maintain custom software
              development.Give it a try and become a permanent customer.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons1" to="/">
              Explore More..
            </Link>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none p-0 banner2"
            style={{ backgroundImage: `url(${image10})` }}
          />
        </div>
        <div className="row m-0">
          <div
            className="col-lg-6 col-sm-12 p-0 banner2"
            style={{ backgroundImage: `url(${image11})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1 className="text-dark" style={{ fontFamily: "Balsamiq Sans" }}>
              Deployment And maintenance
            </h1>
            <p>
              When the system meets your approval and is ready to “go live”, we
              deploy it to your production environment and assist with your
              organization's transition to the new system. There is no need to
              install any software on end-users machines – all software is
              installed on the server.Enim-AI provides the best practices for
              deployment and maintenance of your application.Give it a try and
              become a permanent customer.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons1" to="/">
              Explore More..
            </Link>
          </div>
        </div>
      </div>
      <div
        className="contact-form"
        style={{ backgroundImage: `url(${image6})` }}
      >
        <div className="d-flex justify-content-center">
          <p className="sponsor">Stuck? Contact Us</p>
        </div>
        <div id="contactMe" className="form-ui">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Body;
