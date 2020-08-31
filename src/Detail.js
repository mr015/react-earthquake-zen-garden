import React from "react";
import { home_sample } from "./home_data";
import img from "./Avatar.jpg";

export const Detail = () => {

    return (
       <div className="container">
         {home_sample.map((data, key) => {
            return (
               <div key={key}>
                  <Details
                     key={key}
                     place={data.place}
                     mag={data.mag}
                     time={data.time}
                     status={data.status}
                     tsunami = {data.tsunami}
                     type = {data.type}
                   />
                </div>
             );
           })}
         </div>
        );

  }
 const Details = ({ place, mag, time, status, tsunami, type}) => {
  return (
    <table align="center">
      <tbody>
      <tr>
          <th>
          <h2>{place}</h2>
          </th>
      </tr>
      <tr>
          <th>
            <h3>Place</h3>
          </th>
          <td>
            <h3>{place}</h3>
          </td>
       </tr>
       <tr>
           <th>
             <h3>Magnitude</h3>
           </th>
            <td>
              <h3>{mag}</h3>
            </td>
       </tr>
       <tr>
           <th>
             <h3>Time</h3>
           </th>
           <td>
             <h3>{time}</h3>
           </td>
       </tr>
       <tr>
          <th>
            <h3>Status</h3>
          </th>
          <td>
            <h3>{status}</h3>
          </td>
       </tr>
       <tr>
         <th>
           <h3>Tsunami</h3>
         </th>
          <td>
            <p>{tsunami}</p>
          </td>
      </tr>
      <tr>
        <th>
          <h3>Type</h3>
        </th>
         <td>
           <p>{type}</p>
         </td>
     </tr>
      </tbody>
    </table>
  );
}
export default Detail;
