import './LeagueByPreMatchTip.css'
import React, { Component } from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://3.88.0.251/'

export default class Report extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    axios.get("/leagues_by_pre_match_bot")
      .then(res => {
        const list = res.data;
        console.log(res)
        this.setState({ list: list });
      })
  }

  render() {
    return (
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Liga</th>
              <th>País</th>
              <th>Dicas</th>
              <th>Acertos</th>
              <th>Percentual</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list
                .map((league, index) =>
                  <tr key={index}>
                    <td>
                      <img
                        src={league.league.logo}
                        style={{maxWidth: "25px"}}
                        alt='League'
                      />
                    </td>
                    <th>{league.league.external_id}</th>
                    <td>{league.league.name}</td>
                    <td>{league.league.country}</td>
                    <td>{league.total_tips}</td>
                    <td>{league.success_tips}</td>
                    <td>{league.percent.toFixed(2)}%</td>
                  </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}