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
import { addJob } from "../redux/actions/jobAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function CreateJob() {
  const [skills, setSkills] = useState([]);
  const [data, setData] = useState({
    title: "",
    desc: "",
  });
  const technologies = ["ReactJS", "NodeJS", "JavaScript"];
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSkills(e.target.value);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobId = uniqueId();
    const { title, desc } = data;

    if (title !== "" && desc !== "" && skills.length) {
      dispatch(
        addJob({
          title: data.title,
          desc: data.desc,
          jobId: jobId,
          skills: skills,
        })
      );
      localStorage.setItem("jobID", jobId);
      history.push("/");
      setData({ title: "", desc: "" });
      setSkills([]);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <Container>
      <h1>Add Job</h1>
      <FormControl className="form">
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input name="title" value={data.title} onChange={handleInput} />
      </FormControl>
      <FormControl className="form">
        <InputLabel htmlFor="description">Description</InputLabel>
        <Input name="desc" value={data.desc} onChange={handleInput} />
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

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Job
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

export default CreateJob;
