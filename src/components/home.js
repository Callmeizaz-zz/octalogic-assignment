import React from "react";
import { Button } from "@material-ui/core";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
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
    </Container>
  );
}

const Container = Styled.div`
  display:flex;
`;
export default Home;
