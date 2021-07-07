import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="header navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="https://www.variphy.com/" className="navbar-brand">
                Variphy Coding Challenge
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
