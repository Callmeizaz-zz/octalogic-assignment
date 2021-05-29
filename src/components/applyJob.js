import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Styled from "styled-components";
import { uniqueId } from "lodash";
// Redux
import { addApplicant } from "../redux/actions/jobAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ApplyJob() {
  const [skills, setSkills] = useState([]);
  const [detail, setDetails] = useState({
    name: "",
    notes: "",
    notice: 0,
    salary: 0,
  });
  const technologies = ["ReactJS", "NodeJS", "JavaScript"];

  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = history.location;
  const jobId = pathname.split("/")[2];

  const handleChange = (e) => {
    setSkills(e.target.value);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setDetails({ ...detail, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = uniqueId();
    const { name, notes, notice, salary } = detail;

    // Validation
    if (
      (name !== "" && notes !== "" && skills.length,
      notice !== "",
      salary !== null)
    ) {
      dispatch(
        addApplicant({
          name: detail.name,
          notes: detail.notice,
          skills: skills,
          notice: detail.notice,
          salary: detail.salary,
          userId: userId,
          jobId: jobId,
        })
      );

      history.push("/");
      setDetails({ name: "", notes: "", notice: "", salary: "" });
      setSkills([]);
    } else {
      alert("Please fill all the feilds before submiting");
    }
  };

  return (
    <Container>
      <h1>Apply Job</h1>
      <FormControl className="form">
        <InputLabel htmlFor="job">Job Code</InputLabel>
        <Input required name="jobId" value={jobId} disabled />
      </FormControl>
      <FormControl className="form">
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          required
          name="name"
          value={detail.name}
          onChange={handleInput}
        />
      </FormControl>
      <FormControl className="form">
        <InputLabel htmlFor="Notes">Notes</InputLabel>
        <Input name="notes" value={detail.notes} onChange={handleInput} />
      </FormControl>
      <FormControl className="form">
        <InputLabel htmlFor="tech">Technologies</InputLabel>
        <Select multiple value={skills} onChange={handleChange}>
          {technologies.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="form">
        <InputLabel htmlFor="notice">Notice Period</InputLabel>
        <Input
          required
          name="notice"
          type="number"
          value={detail.notice}
          onChange={handleInput}
        />
      </FormControl>
      <FormControl className="form">
        <InputLabel htmlFor="salary">Salary Asked</InputLabel>
        <Input
          required
          name="salary"
          type="number"
          value={detail.salary}
          onChange={handleInput}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Apply Job
      </Button>
    </Container>
  );
}

const Container = Styled.div`
display:flex;
flex-direction: column;
margin:10px auto;
margin-top:100px;
max-width:500px;
padding: 20px;
border: 2px solid #faf5f5dd;
border-radius:10px;
box-shadow: 3px 3px 35px rgba(0, 0, 0, 0.5);
h1{
  color:#34656d;
  text-align:center;
   margin-bottom: 10px;
}
.form{
  margin:10px;
}
.MuiButton-root{
  margin-top:20px;
  margin-left:10px;
  margin-right:10px;
  background-color:#34656d;
}
`;

export default ApplyJob;
