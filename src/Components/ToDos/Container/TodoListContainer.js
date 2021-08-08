import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, makeStyles } from "@material-ui/core";
import TodoList from "../Components/TodoList";

import {
  moveTodoDownWard,
  moveTodoUpWard,
  toggleTodo,
} from "../Actions/todoActions";
import strings from "../../../Utils/Constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    margin: theme.spacing(4),
  },
}));
function TodoListContainer() {
  const dispatch = useDispatch();
  const { completedTodos, inCompletedTodos } = useSelector(
    (state) => state.todos
  );
  const classes = useStyles();

  const onCheckBoxclick = (id) => {
    const updatedTodoList = [...completedTodos, ...inCompletedTodos].map(
      (todo) => {
        if (todo.id === id) {
          const obj = { ...todo };
          obj.complete = !todo.complete;
          return obj;
        }
        return todo;
      }
    );
    dispatch(toggleTodo(updatedTodoList));
  };
  /**
   *
   * @param {Strings} direction - used to check which arrow has been clicked
   * @param {number} id  -  to move the todo with given id
   */
  const moveTodo = (direction, id) => {
    if (direction === strings.UP) {
      dispatch(moveTodoUpWard(id));
    } else if (direction === strings.DOWN) {
      dispatch(moveTodoDownWard(id));
    }
  };
  return (
    <div data-testid="component-todo-container" className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TodoList
            title="To-Do"
            todoList={inCompletedTodos}
            onCheckBoxclick={onCheckBoxclick}
            moveTodo={moveTodo}
          />
        </Grid>
        <Grid item xs={6}>
          <TodoList
            title="Completed"
            todoList={completedTodos}
            onCheckBoxclick={onCheckBoxclick}
            moveTodo={moveTodo}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoListContainer;
