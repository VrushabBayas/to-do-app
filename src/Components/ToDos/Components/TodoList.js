/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Button } from "@material-ui/core";

import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

import strings from "../../../Utils/Constants";
import Todo from "./Todo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
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
        <Todo
          todoListLength={todoList.length}
          todo={todo}
          index={index}
          handleOnDeleteKey={handleOnDeleteKey}
          handleOnArrowKey={handleOnArrowKey}
          handleTodoClick={handleTodoClick}
        />
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
