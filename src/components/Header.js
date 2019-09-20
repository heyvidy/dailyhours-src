import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
          <a className="navbar-brand" href="/">🏵 Daily Study Hours</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link active" href="/">Home</a>
            <a className="nav-item nav-link active" href="/">About</a>
          </div>
        </div>
      </div>
      </nav>
    )
  }
}
