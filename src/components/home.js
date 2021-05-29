import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, JobStyle } from "../styles/homeStyle";

function Home() {
  // Redux
  const { job } = useSelector((state) => state.jobs);

  return (
    <Container>
      <h1>Job Management</h1>
      <div className="button">
        <Link to="/jobs">
          <Button variant="contained" color="primary">
            Post Job
          </Button>
        </Link>
        <Link to="/applicant">
          <Button variant="contained" color="primary">
            Applicants
          </Button>
        </Link>
      </div>

      {job.length ? (
        job.map((e) => (
          <JobStyle key={e.userId}>
            <div className="jobContainer">
              <h2>Title:{e.title}</h2>
              <p>Job Description:{e.desc}</p>
              <span>
                Skills:
                {e.skills.map((skill) => (
                  <p>{skill}</p>
                ))}
              </span>
            </div>
            <Link to={`/job/${e.jobId}`}>
              <Button variant="contained" color="primary">
                Apply
              </Button>
            </Link>
          </JobStyle>
        ))
      ) : (
        <h3>No Jobs Available</h3>
      )}
    </Container>
  );
}

export default Home;
