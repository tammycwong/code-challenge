import React from "react";
import moment from "moment";

function Table({ users, setUserIndex }) {

  return (
    <table className="app-container">
      <thead className="header">
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>State</th>
          <th>Country</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => {
          const {
            name: { title, first, last },
            location: { state, country },
            dob: { date },
          } = user;

          return (
            <tr key={user.name}>
              <td>
                {title}. {first} {last}
              </td>
              <td>{moment(`${date}`).format("MMMM Do YYYY")}</td>
              <td>{state}</td>
              <td>{country}</td>
              <td>
                <button onClick={() => setUserIndex(index)}>Details</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
