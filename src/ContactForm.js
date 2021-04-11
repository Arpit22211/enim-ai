import React, { useState, useRef } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css";

const renderError = (isError) => {
  if (isError === 1) {
    return (
      <span className="text-danger">
        <ErrorIcon /> required
      </span>
    );
  }
};

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    query: "",
    token: "",
    userId: "231231232",
  });

  const [firstnameBlur, setFirstnameBlur] = useState(0);
  const [emailBlur, setEmailBlur] = useState(0);

  const reCaptcha = useRef();
  const formWrapper = useRef();

  return (
    <div className="container bg-white py-5 px-4">
      <form id="contactForm">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>
              First Name <span className="text-primary">&#42;</span>{" "}
            </label>
            <input
              className={`form-control border border-${
                firstnameBlur === 1 ? "danger" : "primary"
              } py-4`}
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => {
                setForm({ ...form, firstName: e.target.value });
              }}
              onFocus={() => {
                setFirstnameBlur(0);
              }}
              onBlur={() => {
                if (form.firstName === "") {
                  setFirstnameBlur(1);
                }
              }}
              required
            />
            {renderError(firstnameBlur)}
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input
              className="form-control border border-primary py-4"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => {
                setForm({ ...form, lastName: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label>
            Email Address <span className="text-primary">&#42;</span>
          </label>
          <input
            className={`form-control border border-${
              emailBlur === 1 ? "danger" : "primary"
            } py-4`}
            placeholder="Email Address"
            value={form.emailAddress}
            onChange={(e) => {
              setForm({ ...form, emailAddress: e.target.value });
            }}
            onFocus={() => {
              setEmailBlur(0);
            }}
            onBlur={() => {
              if (form.emailAddress === "") {
                setEmailBlur(1);
              }
            }}
            pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
            required
          />
          {renderError(emailBlur)}
        </div>
        <label>Enter your query</label>
        <textarea
          className="form-group border border-primary w-100 p-2 rounded-lg"
          rows="5"
          placeholder="Type here ..."
          value={form.query}
          onChange={(e) => {
            setForm({ ...form, query: e.target.value });
          }}
          wrap="soft"
        ></textarea>
        <div className="mb-3 captcha-wrapper" ref={formWrapper}>
          <ReCAPTCHA
            sitekey="6LdfAuIZAAAAAI4QNgmJXkSQLbTVZabLOdMVgoNx"
            onChange={(token) => {
              setForm({ ...form, token: token });
            }}
            ref={reCaptcha}
            onExpired={() => {
              setForm({ ...form, token: "" });
            }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-dark p-3">
            <span className="h5">Submit Query</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
