import React, { Component } from "react";
import NavBar from "./components/navbar";
import Feeds from "./components/feeds";
import "./App.css";

class App extends Component {
  state = {
    feeds: []
  };

  handleSearch = search => {
    if (search && search !== "") {
      fetch("/api/twitterFeeds?search=" + search)
        .then(res => res.json())
        .then(data => {
          this.setState({ feeds: data.statuses });
        });
    } else {
      this.setState({ feeds: [] });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onSearch={this.handleSearch} />
        <main className="container">
          <Feeds feeds={this.state.feeds} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
