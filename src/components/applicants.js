import { Button } from "@material-ui/core";
import React from "react";
import Styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Container, JobStyle } from "../styles/homeStyle";
import { useHistory } from "react-router-dom";
import { removeApplicant } from "../redux/actions/jobAction";

function Applicants() {
  // Redux
  const { applicant } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  //   Handler
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/");
  };

  const removeHandler = (id) => {
    console.log(id);
    dispatch(removeApplicant(id));
  };
  return (
    <Container>
      <StyledHeading>Applicant</StyledHeading>

      {applicant.length ? (
        applicant.map((e) => (
          <JobStyle key={e.userId}>
            <div className="jobContainer">
              <h2>Applicant Name :{e.name}</h2>
              <p>Job Id: {e.jobId}</p>
              <p>Notes :{e.notes}</p>
              <p>Notice Period :{e.notice}</p>
              <span>
                Skills:
                {e.skills.map((skill) => (
                  <p>{skill}</p>
                ))}
              </span>
              <p>Salary: {e.salary}</p>
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={() => removeHandler(e.userId)}
            >
              Remove
            </Button>
          </JobStyle>
        ))
      ) : (
        <>
          <h3>No Applicants</h3>

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Home
          </Button>
        </>
      )}
    </Container>
  );
}

const StyledHeading = Styled.h1`

  margin-bottom:20px;


`;

export default Applicants;
