import React from "react";
import PropTypes from "prop-types";
// import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div data-testid="component-layout">
      <Header />
      {/* <NavBar /> */}
      {children}
      <Footer />
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
