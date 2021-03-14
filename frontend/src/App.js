import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import Home from "./Home";
import { Switch, Route, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";


function App() {
  const history = useHistory();
  let location = useLocation();
  
  function navigateTo(newPath) {
    console.log(location.pathname + " vs " + newPath);
    //prevents unnecessary push to history
    if (location.pathname != newPath) {
      console.log("pushed " + newPath);
      history.push(newPath);
    }
  }

  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/login">
          <SignIn propPassedNavTo={navigateTo} />
        </Route>
        <Route path="/">
          <Home propPassedNavTo={navigateTo} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
