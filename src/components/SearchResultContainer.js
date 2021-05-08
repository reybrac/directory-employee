import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filtered: [],
    sortAsc: false,
  };

  componentDidMount() {
    this.searchEmployee("");
  }

  searchEmployee = (query) => {
    API.search(query)
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log("searchresults res", res.data.results);
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const employeesFiltered = this.state.results.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        employee.name.last
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        `${employee.name.first} ${employee.name.last}`
          .toLocaleLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        employee.email
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        employee.location.state
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        employee.location.country
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      );
    });
    this.setState({ filtered: employeesFiltered });
  };

  sortByCountry = (event) => {
    event.preventDefault();
    const employeesSorted = this.state.results;
    if (!this.state.sortAsc) {
      employeesSorted.sort(this.compareAsc);
    } else {
      employeesSorted.sort(this.compareDsc);
    }
    this.setState({ results: employeesSorted });
  };

  compareAsc = (a, b) => {
    const countryA = a.location.country.toLowerCase();
    const countryB = b.location.country.toLowerCase();

    let comparison = 0;
    if (countryA > countryB) {
      comparison = 1;
    } else if (countryA < countryB) {
      comparison = -1;
    }
    this.setState({ sortAsc: true });
    return comparison;
  };

  compareDsc = (a, b) => {
    const countryA = a.location.country.toLowerCase();
    const countryB = b.location.country.toLowerCase();

    let comparison = 0;
    if (countryA < countryB) {
      comparison = 1;
    } else if (countryA > countryB) {
      comparison = -1;
    }
    this.setState({ sortAsc: false });
    return comparison;
  };

  clear = (event) => {
    event.preventDefault();
    this.setState({ filtered: [], search: "" });
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          clear={this.clear}
        />
        <ResultList
          results={
            this.state.filtered.length > 0
              ? this.state.filtered
              : this.state.results
          }
          sortByCountry={this.sortByCountry}
        />
      </div>
    );
  }
}
// console.log("shows", this.state.results);
export default SearchResultContainer;
