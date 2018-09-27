import React from "react";

const AppNavbar = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <span className="text-success">{branding}</span>
        </a>
      </div>
    </nav>
  );
};

export default AppNavbar;
