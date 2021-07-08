import React, { Component } from "react";
import BeerService from "../BeerService";

export default class CreateBeerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      beerName: "",
      desc: "",
      beerABV: "",
      beerIBU: "",
      timeStamp: "",
    };
    this.changebeerNameHandler = this.changebeerNameHandler.bind(this);
    this.changebeerDescHandler = this.changebeerDescHandler.bind(this);
    this.changebeerABVHandler = this.changebeerABVHandler.bind(this);
    this.changebeerIBUHandler = this.changebeerIBUHandler.bind(this);
    this.changebeertimeStampHandler =
      this.changebeertimeStampHandler.bind(this);
    this.saveOrUpdateBeer = this.saveOrUpdateBeer.bind(this);
  }
  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      BeerService.getBeerById(this.state.id).then((res) => {
        let beer = res.data;
        this.setState({
          beerName: beer.beerName,
          desc: beer.desc,
          beerABV: beer.beerABV,
          beerIBU: beer.beerIBU,
          timeStamp: beer.timeStamp,
        });
      });
    }
  }
  //Functionality triggers a save or update depending on url parameter
  saveOrUpdateBeer = (e) => {
    e.preventDefault();
    let beer = {
      beerName: this.state.beerName,
      desc: this.state.desc,
      beerABV: this.state.beerABV,
      beerIBU: this.state.beerIBU,
      timeStamp: this.state.timeStamp,
    };
    console.log("VIEW BEER OBJECT DATA: " + JSON.stringify(beer));
    // Create Beer Post Request when url ID is '_add'
    if (this.state.id === "_add") {
      BeerService.createBeer(beer).then((res) => {
        this.props.history.push("/beers");
      });
    } else {
      // If url ID is a number, then we perform an update PUT request:
      BeerService.updateBeer(beer, this.state.id).then((res) => {
        this.props.history.push("/beers");
      });
    }
  };
  // Event handlers for state:
  changebeertimeStampHandler = (event) => {
    this.setState({ timeStamp: event.target.value });
  };

  changebeerNameHandler = (event) => {
    this.setState({ beerName: event.target.value });
  };

  changebeerDescHandler = (event) => {
    this.setState({ desc: event.target.value });
  };

  changebeerABVHandler = (event) => {
    this.setState({ beerABV: event.target.value });
  };
  changebeerIBUHandler = (event) => {
    this.setState({ beerIBU: event.target.value });
  };
  // Re-routes to Homepage
  cancel() {
    this.props.history.push("/beers");
  }
  //  Provides title of Form depending on url parameter
  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Beer</h3>;
    } else {
      return <h3 className="text-center">Update Beer</h3>;
    }
  }
  //  Render the JSX
  render() {
    return (
      <div>
        <div
          className="container"
          style={{ justifyContent: "center", padding: "100px 0" }}
        >
          <div className="row">
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                background: "silver",
              }}
            >
              <div style={{ marginTop: "15px" }}>{this.getTitle()}</div>
              <div className="card-body" style={{ margin: "20px" }}>
                <form>
                  <div className="form-group">
                    <div className="form-group">
                      <label> Beer Name: </label>
                      <input
                        placeholder="Beer Name"
                        name="beerName"
                        className="form-control"
                        value={this.state.beerName}
                        onChange={this.changebeerNameHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label> Beer Description: </label>
                      <input
                        placeholder="Beer Description"
                        name="desc"
                        className="form-control"
                        value={this.state.desc}
                        onChange={this.changebeerDescHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label> Beer ABV: </label>
                      <input
                        placeholder="Beer ABV"
                        name="beerABV"
                        className="form-control"
                        value={this.state.beerABV}
                        onChange={this.changebeerABVHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label> Beer IBU: </label>
                      <input
                        placeholder="Beer IBU"
                        name="beerIBU"
                        className="form-control"
                        value={this.state.beerIBU}
                        onChange={this.changebeerIBUHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label> Beer Create Date: </label>
                      <input
                        placeholder="Beer Date"
                        name="timeStamp"
                        className="form-control"
                        value={this.state.timeStamp}
                        onChange={this.changebeertimeStampHandler}
                      />
                    </div>

                    <button
                      className="btn btn-success"
                      onClick={this.saveOrUpdateBeer}
                      style={{ marginTop: "20px" }}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px", marginTop: "20px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
