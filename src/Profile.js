import React from "react";
import { profile_data } from "./data";
import img from "./Avatar.jpg";

export const Profile = () => {

    return (
       <div className="container">
         {profile_data.map((data, key) => {
            return (
               <div key={key}>
                  <Stocks
                     key={key}
                     firstName={data.firstName}
                     lastName={data.lastName}
                     phone={data.phone}
                     email={data.email}
                     bio = {data.bio}
                   />
                </div>
             );
           })}
         </div>
        );

  }
 const Stocks = ({ firstName, lastName, phone, email, bio}) => {
  return (
    <table align="center">
      <tbody>
      <tr>
          <th>
          <h2>Profile</h2>
          </th>
      </tr>
      <tr>
          <td>
          <img src={img} style={{width: 50}} />
          </td>
      </tr>
        <tr>
          <th>
            <h3>First Name</h3>
          </th>
          <td>
            <h3>{firstName}</h3>
          </td>
       </tr>
       <tr>
           <th>
             <h3>Last Name</h3>
           </th>
            <td>
              <h3>{lastName}</h3>
            </td>
       </tr>
       <tr>
           <th>
             <h3>Phone</h3>
           </th>
           <td>
             <h3>{phone}</h3>
           </td>
       </tr>
       <tr>
          <th>
            <h3>Email</h3>
          </th>
          <td>
            <h3>{email}</h3>
          </td>
       </tr>
       <tr>
         <th>
           <h3>Bio</h3>
         </th>
          <td>
            <p>{bio}</p>
          </td>
      </tr>
      </tbody>
    </table>
  );
}
export default Profile;
