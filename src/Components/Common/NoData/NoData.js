import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";

function NoData({ title }) {
  return <Paper>{title}</Paper>;
}

NoData.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NoData;
