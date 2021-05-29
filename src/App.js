import { Switch, Route } from "react-router-dom";
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
      </Switch>
    </>
  );
}

export default App;
