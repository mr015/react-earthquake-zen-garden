import React from "react";
import { home_sample } from "./home_data";
import Detail from "./Detail";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
export const Home = () => {
    return (
    <div className="container">
        <table align ="center">
        <tbody>
        <tr>
          <th>
          Place
          </th>
          <th>
          Magnitude
          </th>
          <th>
          Time
          </th>
        </tr>
        </tbody>
        </table>
      {home_sample.map((data, key) => {
         return (
            <div key={key}>
               <Menu
                  key={key}
                  place={data.place}
                  mag={data.mag}
                  time={data.time}
                />
             </div>
          );
        })}
      </div>
  );
};
const Menu = ({ place, mag, time}) => {
 return (
   <table align="center">
     <tbody>
       <tr>
         <td>
          <HashRouter>
           <NavLink to="/detail" className="eq">{place}</NavLink>
           <Route path="/detail" component={Detail}/>
          </HashRouter>
         </td>
         <td>
            <h4>{mag}</h4>
         </td>
         <td>
            <h4>{time}</h4>
         </td>
      </tr>
    </tbody>
   </table>
 );
}
export default Home;
