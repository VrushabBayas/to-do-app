const todoActions = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  GET_TODOS: "GET_TODOS",
  MOVE_TO_DO_UP_WARD: "MOVE_TO_DO_UP_WARD",
  MOVE_TO_DO_DOWN_WARD: "MOVE_TO_DO_DOWN_WARD",
  SORT_TODO: "SORT_TODO",
};

export const toggleTodo = (todoList) => ({
  type: todoActions.TOGGLE_TODO,
  payload: { ...todoList },
});

export const moveTodoUpWard = (id) => ({
  type: todoActions.MOVE_TO_DO_UP_WARD,
  payload: { id },
});

export const moveTodoDownWard = (id) => ({
  type: todoActions.MOVE_TO_DO_DOWN_WARD,
  payload: { id },
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
export const sortTodosAction = (status, order) => ({
  type: todoActions.SORT_TODO,
  payload: { complete: status, order },
});

export default todoActions;
