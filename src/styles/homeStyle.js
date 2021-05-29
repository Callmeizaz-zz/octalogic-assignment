import Styled from "styled-components";

export const Container = Styled.div`
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

export const JobStyle = Styled.div`
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
  font-size:20px;
  color:black;
  padding:5px 0;
}
p{
font-size:15px;
  color:black;
}
span{
  display:flex;
   font-size:15px;
  color:black;
  p{
    padding:0 5px;
  }
}
.MuiButton-root{
  color:#ffff;
}
 
`;
