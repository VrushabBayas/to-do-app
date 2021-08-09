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
    let updatedTodoListInComplete = [];
    let updatedTodoListcomplete = [];
    // find out todo to update
    const todoToUpdate = [...completedTodos, ...inCompletedTodos].find(
      (todo) => todo.id === id
    );
    // chnage it's status
    const updatedTodo = { ...todoToUpdate, complete: !todoToUpdate.complete };

    if (todoToUpdate.complete) {
      // remove todo from complted list and push it to in completed
      updatedTodoListcomplete = completedTodos.filter((item) => item.id !== id);
      updatedTodoListInComplete = [...inCompletedTodos, updatedTodo];
    } else {
      // remove todo from in-complted list and push it to  completed list
      updatedTodoListInComplete = inCompletedTodos.filter(
        (item) => item.id !== id
      );
      updatedTodoListcomplete = [...completedTodos, updatedTodo];
    }

    dispatch(
      toggleTodo({
        completedTodos: updatedTodoListcomplete,
        inCompletedTodos: updatedTodoListInComplete,
      })
    );
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
