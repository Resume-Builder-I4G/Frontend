import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  StyledInputForm,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./Language.css";

function Language() {
  let initLang;
  const [language, setLanguage] = useState(initLang);

  const submitHandler = (event) => {
    event.preventDefault();
    let langSplit = language.split(",");
    const langList = langSplit;
    localStorage.setItem("Languages", JSON.stringify(langList));
  };

  const getLanguages = () => {
    initLang = localStorage.getItem("Languages");
    console.log(initLang);
  };

  // getLanguages();

  return (
    <div className="container-fluid content">
      <div className="row">
        <div className="col-12 main-content">
          <form onSubmit={submitHandler}>
            <StyledInputForm className="form-group">
              <StyledInputLabel for="inputLanguages">
                Langauges (%)
              </StyledInputLabel>
              <StyledInputTextarea
                className="form-control"
                id="inputLanguages"
                rows="8"
                defaultValue={initLang}
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
              ></StyledInputTextarea>
            </StyledInputForm>
          </form>

          <div className="buttons">
            <StyledPrev type="submit" onClick={submitHandler} href="#">
              Back
            </StyledPrev>
            <StyledNext type="submit" onClick={submitHandler} href="#">
              Next Section
            </StyledNext>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
