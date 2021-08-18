import React from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
  itemComplete: {
    marginLeft: theme.spacing(1),
    textDecoration: "line-through",
  },
}));
function CheckBox({ checked, onChange, color, lable }) {
  const classes = useStyles();
  return (
    <div>
      <FormControlLabel
        classes={{
          label: checked ? classes.itemComplete : classes.item,
        }}
        control={
          <Checkbox checked={checked} onChange={onChange} color={color} />
        }
        label={lable}
      />
    </div>
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  lable: PropTypes.string.isRequired,
};

export default CheckBox;
