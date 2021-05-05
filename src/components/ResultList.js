import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item">
          {result.name.first} {}
          {result.name.last}
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
