import {BrowserRouter, BrowserRouter as Route, Switch} from "react-router-dom";
import Navbar from "../components/Navbar";
import RedirecTo from "../components/RedirecTo";

import Home from "../Pages/Home";
import Roadmap from "../Pages/Roadmap";
  
export default function AppRouter() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/whitepaper">
            <RedirecTo to="https://google.com"/>
          </Route>
          <Route exact path="/roadmap">
            <Roadmap/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            Error 404
          </Route>
        </Switch>
    </BrowserRouter>
    )
}
