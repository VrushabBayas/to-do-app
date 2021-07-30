const todoActions = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  GET_TODOS: "GET_TODOS",
};

export const toggleTodo = (todoList) => ({
  type: todoActions.TOGGLE_TODO,
  payload: { todoList },
});

export const getTodos = () => ({
  type: todoActions.GET_TODOS,
});

export const addTodo = (id) => ({
  type: todoActions.ADD_TODO,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: todoActions.ADD_TODO,
  payload: { id },
});

export default todoActions;
