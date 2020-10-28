import React, { useState, useEffect } from "react";
import "./Form.css";
import axios from "axios";
import Success from "../../screens/contact-us/Success";
import styled from "styled-components";

const StyledInput = styled.input`
  outline: none;
  background: #ffffff;
  border: 2px solid #216de0;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 16px;
`;

const StyledTextarea = styled.textarea`
  outline: none;
  background: #ffffff;
  border: 2px solid #216de0;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 16px;
  margin-bottom: 3.375rem;
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loader, setLoader] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setLoader(true);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          // form.reset();
          setStatus("SUCCESS");
          setLoader(false);
        } else {
          setStatus("ERROR");
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus("ERROR");
        setLoader(false);
      });

    setLoader(true);
  };

  const updateStatus = () => {
    setStatus((status = ""));
  };
  return (
    <div>
      <form className="form" onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="contact-name">
            <span>Email Address</span>
            <StyledInput
              className="form-control"
              id="contact-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setName(e.target.value)}
              placeholder="awojidedaniel@gmail.com"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">
            <span>Email Address</span>
            <StyledInput
              required
              className="form-control"
              id="contact-name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="awojide daniel"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">
            <span>Message</span>
            <StyledTextarea
              id="contact-message"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              rows="6"
              minLength="30"
              required
            ></StyledTextarea>
          </label>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ background: loader ? "#ccc" : null }}
          >
            {" "}
            {!loader ? "Send" : <i className="fas fa-ellipsis-h"></i>}
          </button>
        </div>
      </form>
      {status === "SUCCESS" ? <Success display={updateStatus} /> : ""}
      {status === "ERROR" && (
        <p style={{ textAlign: "center", color: "red" }}>
          {" "}
          <b>Ooops! There was an error.</b>
        </p>
      )}
    </div>
  );
};

export default Form;
