import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by name, email, state, or country"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
          style={{ margin: "10px" }}
        >
          Search
        </button>{" "}
        <button
          onClick={props.clear}
          className="btn btn-secondary btn-dark mt-3"
          style={{ margin: "10px" }}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
