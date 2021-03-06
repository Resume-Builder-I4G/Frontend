import React, { useState, useEffect } from "react";
import PreviewDownload from "../../../components/preview-download/PreviewDownload";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Buttons,
  MainContent,
  StyledInputForm,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./Skill.css";

function Skill(props) {
  let initSkills;
  const [skill, setSkill] = useState(initSkills);

  const submitHandler = (event) => {
    event.preventDefault();
    if (skill) {
      let skillSplit = skill.split(",");
      const skillList = skillSplit;
      localStorage.setItem("Skill", JSON.stringify(skillList));
    }

    // let bigToken = JSON.parse(localStorage.getItem("tokens"));
    // const token = bigToken.token;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // event.preventDefault();
    // axios
    //   .post(
    //     "https://resume-builder-i4g.herokuapp.com/skills",
    //     {
    //       name: skill,
    //       level: 3, //varEmail is a variable which holds the email
    //     },
    //     config
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const getSkills = () => {
    initSkills = localStorage.getItem("Skill");
    console.log(initSkills);
    // let bigToken = JSON.parse(localStorage.getItem("tokens"));
    // const token = bigToken.token;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // axios
    //   .get("https://resume-builder-i4g.herokuapp.com/skills", config)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div id="skills" className="container-fluid content">
      <div className="previewndownload-wrap">
        <PreviewDownload />
      </div>

      <MainContent className="main-content-body">
        <p className="head-skills">Skills</p>
        <form onSubmit={submitHandler}>
          <StyledInputForm className="form-group">
            <StyledInputLabel for="inputSkills">Skills</StyledInputLabel>
            <StyledInputTextarea
              className="form-control"
              id="inputSkills"
              rows="8"
              defaultValue={initSkills}
              value={skill}
              placeholder={initSkills}
              onChange={(event) => setSkill(event.target.value)}
            ></StyledInputTextarea>
          </StyledInputForm>
        </form>

        <Buttons className="nextnprev-btn-container">
          <StyledPrev type="submit" onClick={submitHandler} href="#">
            <Link to="/new-resume/achivements">Back</Link>
          </StyledPrev>

          <StyledNext type="submit" onClick={submitHandler} href="#">
            <Link to="/new-resume/references" className="text-white">
              Next Section
            </Link>
          </StyledNext>
        </Buttons>
      </MainContent>
    </div>
  );
}

export default Skill;
