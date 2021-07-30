import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, makeStyles } from "@material-ui/core";
import TodoList from "../Components/TodoList";

import { toggleTodo } from "../Actions/todoActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    margin: theme.spacing(4),
  },
}));
function TodoListContainer() {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todos);
  const classes = useStyles();

  const completedTodo = useMemo(() => {
    return todoList.filter((todo) => !todo.complete);
  }, [todoList]);
  const inCompletedTodo = useMemo(() => {
    return todoList.filter((todo) => todo.complete);
  }, [todoList]);

  const onCheckBoxclick = (id) => {
    const updatedTodoList = [...todoList].map((todo) => {
      if (todo.id === id) {
        const obj = { ...todo };
        obj.complete = !todo.complete;
        return obj;
      }
      return todo;
    });
    dispatch(toggleTodo(updatedTodoList));
  };
  return (
    <div data-testid="component-todo-container" className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TodoList
            title="To-Do"
            todoList={completedTodo}
            onCheckBoxclick={onCheckBoxclick}
          />
        </Grid>
        <Grid item xs={6}>
          <TodoList
            title="Completed"
            todoList={inCompletedTodo}
            onCheckBoxclick={onCheckBoxclick}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoListContainer;
