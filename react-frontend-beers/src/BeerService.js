import axios from "axios";

//Base URL that I have created:
const BEER_API_BASE_URL = "http://localhost:8080/api/v1/beers";

class BeerService {
  // Rest Client API's through axios:

  // Get request for beers
  getBeers() {
    return axios.get(BEER_API_BASE_URL);
  }
  // Get request for Beer with given ID parameter in url
  getBeerById(beerId) {
    return axios.get(BEER_API_BASE_URL + "/" + beerId);
  }
  // Post request with Beer Object passed into parameter
  createBeer(beer) {
    return axios.post(BEER_API_BASE_URL, beer);
  }
  // Put request with ID and Beer object passed into parameter
  updateBeer(beer, beerId) {
    return axios.put(BEER_API_BASE_URL + "/" + beerId, beer);
  }
  // Delete request from a given ID
  deleteBeer(beerId) {
    return axios.delete(BEER_API_BASE_URL + "/" + beerId);
  }
}
// Exporting the class object (not the class itself):
export default new BeerService();
