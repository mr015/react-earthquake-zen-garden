
import React from "react";
import img from "./realtor-com.png";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";


export const Main = () => {

  return (
    <HashRouter>
        <h3 align = "center">Earthquake Zen Garden</h3>
        <a href="/"><img src={img} style={{width: 50}} /></a>

        <NavLink to="/profile"className="ws">Welcome Sally</NavLink>
        <NavLink to="/home" className="eq"><h4 align ="center">USGS All Earthquakes, Past Hour</h4></NavLink>

        <Route path="/profile" component={Profile}/>
        <Route path="/home" component={Home}/>

    </HashRouter>
  );

};
