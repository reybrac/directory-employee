import React from "react";

function ResultList(props) {
  return (
    <table className="table table-hover">
      <caption>List of employees</caption>
      <thead className="thead-dark">
        <tr>
          <th>Profile picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>email</th>
          <th>State</th>

          <th>
            <button onClick={props.sortByCountry}>Country</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => (
          <tr key={result.login.uuid}>
            <td>
              <img alt={result.name.first} src={result.picture.medium}></img>
            </td>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.dob.age}</td>
            <td>{result.email}</td>
            <td>{result.location.state}</td>
            <td>{result.location.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;
