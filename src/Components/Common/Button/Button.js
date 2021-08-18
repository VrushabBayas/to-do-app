import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  buttons: {},
}));

function CustomButton({ disabled, onClick, children }) {
  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      <Button disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
}
CustomButton.defaultProps = {
  disabled: false,
};
CustomButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
