import './Report.css'
import React, { Component } from "react";
import axios from "axios";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tdlists: [],
    };
  }

  LeaguesList() {
    axios
      .get("/leagues")
      .then((res) => {
        this.setState({ tdlists: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.LeaguesList();
  }

  render() {
    return (
      <div>
        Aqyu
      </div>
  )};
}

export default Report;
