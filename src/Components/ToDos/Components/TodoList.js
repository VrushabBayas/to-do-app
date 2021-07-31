/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Paper, makeStyles, Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
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
  },
  itemComplete: {
    marginLeft: theme.spacing(1),
    textDecoration: "line-through",
  },
}));
function TodoList({ todoList = [], title, onCheckBoxclick }) {
  const classes = useStyles();

  /**
   * @method handleTodoClick
   * @param {Number} id - id of todo to toggle
   * @description - it will toggle state of todo
   */
  const handleTodoClick = (id) => {
    onCheckBoxclick(id);
  };
  const getTodoList = () => {
    return todoList.map((todo) => {
      return (
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
        </Paper>
      );
    });
  };
  return (
    <div className={classes.root}>
      <div className="mb-1">{title}</div>
      <div>{!todoList.length ? "List is empty" : getTodoList()}</div>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onCheckBoxclick: PropTypes.func.isRequired,
};

export default TodoList;
