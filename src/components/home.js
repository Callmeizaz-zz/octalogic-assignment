import React from "react";
import { Button } from "@material-ui/core";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  // Redux
  const { job } = useSelector((state) => state.jobs);
  console.log(job);

  return (
    <Container>
      <h1>Job Management</h1>
      <div className="button">
        <Link to="/jobs">
          <Button variant="contained" color="primary">
            Post Job
          </Button>
        </Link>

        <Button variant="contained" color="primary">
          Search Job
        </Button>
      </div>

      {job.length ? (
        job.map((e) => (
          <Link to={`/job/${e.jobId}`}>
            <JobStyle key={e.jobId}>
              <h2>Title:{e.title}</h2>
              <p>Job Description:{e.desc}</p>
              <span>
                Skills:
                {e.skills.map((skill) => (
                  <p>{skill}</p>
                ))}
              </span>
            </JobStyle>
          </Link>
        ))
      ) : (
        <h3>No Jobs Available</h3>
      )}
    </Container>
  );
}

const Container = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:50px;
  max-width:70vw;
  margin:0 auto;
  padding: 20px;
border: 2px solid #faf5f5dd;
border-radius:10px;
box-shadow: 3px 3px 35px rgba(0, 0, 0, 0.5);
.button{
  padding:10px;
  margin-bottom:10px;
}
.MuiButton-root{
  margin-top:20px;
  margin-left:10px;
  margin-right:10px;
  background-color:#34656d;
}

`;

const JobStyle = Styled.div`
width:100%;
display:flex;
max-width:50vw;
padding:20px;
margin:0px 5px 10px 5px;
flex-direction:column;
border: 2px solid #faf5f5dd;
border-radius:10px;
box-shadow: 3px 3px 35px rgba(0, 0, 0, 0.5);
h2{
  width:100%;
}
span{
  display:flex;
  p{
    padding:0 5px;
  }
}
 
`;
export default Home;
