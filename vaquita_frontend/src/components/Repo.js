import React, { Component } from "react";

export default class Repo extends Component {
  state = {
    showRepoInfo: false
  };
  render() {
    const { repo } = this.props;
    const { showRepoInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {repo.name}
          <i
            onClick={() =>
              this.setState({
                showRepoInfo: !this.state.showRepoInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
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
