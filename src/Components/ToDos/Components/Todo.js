import React from "react";
import PropTypes from "prop-types";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

import { DeleteFilled } from "@ant-design/icons";

import { v4 as uuidv4 } from "uuid";
import strings from "../../../Utils/Constants";
import CheckBox from "./common/checkbox/checkBox";
import CustomButton from "../../Common/Button/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  butonGroup: {
    display: "flex",
  },
}));
function Todo({
  todo,
  handleOnArrowKey,
  handleOnDeleteKey,
  handleTodoClick,
  index,
  todoListLength,
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} key={uuidv4()}>
      <Grid container>
        <Grid item xs={7}>
          <CheckBox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            checked={todo.complete}
            onChange={() => handleTodoClick(todo.id)}
            lable={todo.title}
          />
        </Grid>
        <Grid item xs={5} className={classes.butonGroup}>
          <CustomButton
            onClick={() => handleOnArrowKey(strings.UP, todo.id)}
            disabled={index === 0}
          >
            <ArrowUpward />
          </CustomButton>
          <CustomButton
            disabled={index === todoListLength - 1}
            onClick={() => handleOnArrowKey(strings.DOWN, todo.id)}
          >
            <ArrowDownward />
          </CustomButton>
          <CustomButton onClick={() => handleOnDeleteKey(todo.id)}>
            <DeleteFilled />
          </CustomButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    complete: PropTypes.bool,
  }).isRequired,
  handleOnDeleteKey: PropTypes.func.isRequired,
  handleOnArrowKey: PropTypes.func.isRequired,
  handleTodoClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  todoListLength: PropTypes.number.isRequired,
};

export default Todo;
