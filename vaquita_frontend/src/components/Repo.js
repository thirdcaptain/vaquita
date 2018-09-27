import React, { Component } from "react";

export default class Repo extends Component {
  state = {
    showRepoInfo: false
  };
  render() {
    const { repo } = this.props;
    const { showRepoInfo } = this.state;
    return (
      <div className="card card-body">
        <h4>
          <span className="text-success">
            <small>{repo.name} </small>
            <i
              onClick={() =>
                this.setState({
                  showRepoInfo: !this.state.showRepoInfo
                })
              }
              className="fas fa-arrow-down float-right"
              style={{ cursor: "pointer" }}
            />
          </span>
        </h4>
        {showRepoInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Commits: {repo.commits}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
