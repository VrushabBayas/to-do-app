import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div data-testid="component-layout">
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
