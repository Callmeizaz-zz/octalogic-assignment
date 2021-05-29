import { Switch, Route } from "react-router-dom";
import Applicants from "./components/applicants";
import ApplyJob from "./components/applyJob";
import CreateJob from "./components/createJob";
import Home from "./components/home";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/jobs" exact>
          <CreateJob />
        </Route>
        <Route path="/job/:id" exact>
          <ApplyJob />
        </Route>
        <Route path="/applicant" exact>
          <Applicants />
        </Route>
      </Switch>
    </>
  );
}

export default App;
