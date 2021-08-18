import React from "react";
import PropTypes from "prop-types";
import { Paper, makeStyles, Checkbox, Button } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

import { DeleteFilled } from "@ant-design/icons";

import { v4 as uuidv4 } from "uuid";
import strings from "../../../Utils/Constants";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  item: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
  itemComplete: {
    marginLeft: theme.spacing(1),
    textDecoration: "line-through",
  },
  buttons: {
    margin: "auto",
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
    <div>
      <Paper className={classes.paper} key={uuidv4()}>
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          checked={todo.complete}
          onChange={() => handleTodoClick(todo.id)}
        />
        <div className={todo.complete ? classes.itemComplete : classes.item}>
          {todo.title}
        </div>
        <div className={classes.item}>
          <div className={classes.buttons}>
            <Button
              disabled={index === 0}
              onClick={() => handleOnArrowKey(strings.UP, todo.id)}
            >
              <ArrowUpward />
            </Button>
          </div>
          <div className={classes.buttons}>
            <Button
              disabled={index === todoListLength - 1}
              onClick={() => handleOnArrowKey(strings.DOWN, todo.id)}
            >
              <ArrowDownward />
            </Button>
          </div>
          <div className={classes.buttons}>
            <Button onClick={() => handleOnDeleteKey(todo.id)}>
              <DeleteFilled />
            </Button>
          </div>
        </div>
      </Paper>
    </div>
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
  index: PropTypes.bool.isRequired,
  todoListLength: PropTypes.number.isRequired,
};

export default Todo;
