import React, { Component } from "react";
import BeerService from "../BeerService";
import Moment from "moment";
/*  Moment.js used to format the time: */

export default class ListBeerComponent extends Component {
  // Handle state and binding events:
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
    this.addBeer = this.addBeer.bind(this);
    this.editBeer = this.editBeer.bind(this);
    this.deleteBeer = this.deleteBeer.bind(this);
  }

  /*Delete function with confirmation ability
Filter function for increased performance
BeerService object works through the axios library */
  deleteBeer(id) {
    if (
      window.confirm("Are you sure you would like to delete this Beer entry?")
    )
      BeerService.deleteBeer(id).then((res) => {
        this.setState({
          beers: this.state.beers.filter((beer) => beer.id !== id),
        });
      });
  }

  /*Called immediately after a component is mounted. 
  Setting state here will trigger re-rendering. */
  componentDidMount() {
    BeerService.getBeers().then((res) => {
      this.setState({ beers: res.data });
    });
  }
  // Update Function => Navigates routing when event is triggered
  editBeer(id) {
    this.props.history.push(`/add-beer/${id}`);
  }
  // Add Beer Method => Navigates routing
  addBeer() {
    this.props.history.push("/add-beer/_add");
  }
  // Render Homepage and map Beer object values into table:
  render() {
    return (
      <div>
        <h2
          className="text-center"
          style={{ marginTop: "25px", fontSize: "70px" }}
        >
          {" "}
          <u>Beer List</u>{" "}
        </h2>
        <div className="container text-center">
          <button
            className="btn btn-primary"
            style={{ margin: "10px", width: "200px" }}
            onClick={this.addBeer}
          >
            Add Beer
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered table-hover" 
          style={{textAlign: "center", verticalAlign: 'middle'}}>
            <thead>
              <tr>
                <th> Beer ID </th>
                <th style={{ width: "15%" }}> Beer Name </th>
                <th style={{ width: "35%" }}> Beer Description </th>
                <th> Beer ABV </th>
                <th> Beer IBU </th>
                <th> Created Date </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {this.state.beers.map((beer) => (
                <tr key={beer.id}>
                  <td> {beer.id} </td>
                  <td> {beer.beerName} </td>
                  <td> {beer.desc} </td>
                  <td> {beer.beerABV} </td>
                  <td> {beer.beerIBU} </td>
                  <td> {Moment(beer.timeStamp).format("YYYY-MM-DD")} </td>
                  <td>
                    <button
                      style={{ display: "table-cell"}}
                      onClick={() => this.editBeer(beer.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteBeer(beer.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
