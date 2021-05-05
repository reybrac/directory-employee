import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q="; //original
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
const BASEURL = "https://randomuser.me/api/?gender=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function (query) {
    return axios.get(BASEURL + query + "&results=10");

    // return axios.get(BASEURL + query + APIKEY); // original
  },
};
console.log("API call", axios.get(BASEURL));
