import React, { Component } from "react";

class NavBar extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">Twitter Feed</div>
        <div className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Feeds"
            aria-label="Search"
            onChange={this.handleChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={() => this.props.onSearch(this.state.searchText)}
          >
            Search
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
