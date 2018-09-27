import React, { Component } from "react";
import Repo from "./Repo";

class Repos extends Component {
  state = {
    repos: [
      {
        name: "my first repo",
        commits: 500,
        id: 1
      },
      {
        name: "my second repo",
        commits: 36,
        id: 2
      },
      {
        name: "my third repo",
        commits: 25,
        id: 3
      }
    ]
  };
  render() {
    const { repos } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Repo</span> List
        </h1>
        {repos.map(repo => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </React.Fragment>
    );
  }
}

export default Repos;
