/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Paper, makeStyles, Checkbox, Button } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {
  DeleteFilled,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

import strings from "../../../Utils/Constants";

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
    display: "flex",
  },
  itemComplete: {
    marginLeft: theme.spacing(1),
    textDecoration: "line-through",
  },
  buttons: {
    margin: "auto",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sortingIcons: {
    fontSize: "25px",
  },
}));
function TodoList({
  todoList = [],
  title,
  onCheckBoxclick,
  moveTodo,
  sortTodos,
  deleteTodo,
}) {
  const classes = useStyles();

  /**
   * @method handleTodoClick
   * @param {Number} id - id of todo to toggle
   * @description - it will toggle state of todo
   */
  const handleTodoClick = (id) => {
    onCheckBoxclick(id);
  };

  /**
   * @method - handleOnArrowKey
   * @param {Strings} direction - direction to move todo
   * @param {Number} id - id of selected todo
   * @description - move todo in speciied direction
   */
  const handleOnArrowKey = (direction, id) => {
    moveTodo(direction, id);
  };
  /**
   * @method - handleOnSortClick
   * @param {String} order - sort todo in selected order
   */
  const handleOnSortClick = (order) => {
    sortTodos(order);
  };
  /**
   * @method - handleOnSortClick
   * @param {String} order - sort todo in selected order
   */
  const handleOnDeleteKey = (id) => {
    deleteTodo(id);
  };
  const getTodoList = () => {
    return todoList.map((todo, index) => {
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
                disabled={index === todoList.length - 1}
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
      );
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.titleWrapper}>
        <div>{title}</div>
        <div>
          <Button onClick={() => handleOnSortClick(strings.ASC)}>
            <SortAscendingOutlined className={classes.sortingIcons} />
          </Button>
          <Button onClick={() => handleOnSortClick(strings.DSE)}>
            <SortDescendingOutlined className={classes.sortingIcons} />
          </Button>
        </div>
      </div>
      <div>{!todoList.length ? "List is empty" : getTodoList()}</div>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onCheckBoxclick: PropTypes.func.isRequired,
  moveTodo: PropTypes.func.isRequired,
  sortTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
