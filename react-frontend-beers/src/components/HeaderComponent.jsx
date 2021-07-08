import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="header navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="https://www.DripDeveloper.com/" className="navbar-brand">
                Bobby's Full Stack RESTful Application
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
