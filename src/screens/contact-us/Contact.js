import React, { Component } from "react";
import styled from "styled-components";
import "./Contact.css";
import Form from "../../components/Form/Form";
import locationmarker from "../../assets/svgs/location-marker.svg";
import phone from "../../assets/svgs/phone.svg";
import email from "../../assets/svgs/email.svg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  color: #2e2e2e;
`;

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact-content">
                <Title>Contact Us</Title>
                <p className="contact__text">
                  Feel free to reach out to us with your questions <br /> and
                  complaints
                </p>
                <div>
                  <div className="d-flex contact-info">
                    <img className="mr-4" src={locationmarker} alt="" />
                    <div>
                      Resume Builder Ltd. <br /> 24 Lekki Street Lagos, Nigeria
                    </div>
                  </div>
                  <div className="d-flex contact-info mt-0">
                    <img className="mr-4" src={phone} alt="" />
                    090 - 000 - 0000
                  </div>
                  <div className="d-flex contact-info">
                    <img className="mr-4" src={email} alt="" />
                    support@resumebuilder.com
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
