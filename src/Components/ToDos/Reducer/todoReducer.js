/* eslint-disable no-param-reassign */
import todoActions from "../Actions/todoActions";

const initialState = {
  completedTodos: [
    { id: 2, title: "Play Pubg", complete: true },
    { id: 4, title: "Talk to every one", complete: true },
    { id: 6, title: "Watch Lucifer", complete: true },
    { id: 8, title: "Wash car", complete: true },
    { id: 10, title: "bring Growserry", complete: true },
  ],
  inCompletedTodos: [
    { id: 1, title: "complete todo app", complete: false },
    { id: 3, title: "Play Shawdow fight", complete: false },
    { id: 5, title: "Play with every one", complete: false },
    { id: 7, title: "Improve english", complete: false },
    { id: 9, title: "wash bike", complete: false },
  ],
};

const swap = (tempList, index, index2) => {
  const tmp = tempList[index2];
  tempList[index2] = tempList[index];
  tempList[index] = tmp;
};
const moveTodoUpward = (id, todoList) => {
  const tempList = [...todoList];
  for (let index = 0; index < tempList.length; index += 1) {
    const element = tempList[index];
    if (element.id === id) {
      swap(tempList, index, index - 1);
      break;
    }
  }
  return tempList;
};
const moveTodoDownWard = (id, todoList) => {
  const tempList = [...todoList];
  for (let index = 0; index < tempList.length; index += 1) {
    const element = tempList[index];
    if (element.id === id) {
      swap(tempList, index, index + 1);
      break;
    }
  }
  return tempList;
};
const getTodosStatus = (state, id) => {
  return [...state.completedTodos, ...state.inCompletedTodos].find(
    (todo) => todo.id === id
  ).complete;
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case todoActions.GET_TODOS:
      return { todoList: state.todoList };
    case todoActions.TOGGLE_TODO:
      return { ...state, ...payload };
    case todoActions.MOVE_TO_DO_DOWN_WARD: {
      const isCompleted = getTodosStatus(state, payload.id);
      const todos = isCompleted ? state.completedTodos : state.inCompletedTodos;
      const listToBeUpdate = isCompleted
        ? "completedTodos"
        : "inCompletedTodos";
      return {
        ...state,
        [listToBeUpdate]: moveTodoDownWard(payload.id, todos),
      };
    }
    case todoActions.MOVE_TO_DO_UP_WARD: {
      const isCompleted = getTodosStatus(state, payload.id);
      const todos = isCompleted ? state.completedTodos : state.inCompletedTodos;
      const listToBeUpdate = isCompleted
        ? "completedTodos"
        : "inCompletedTodos";
      return { ...state, [listToBeUpdate]: moveTodoUpward(payload.id, todos) };
    }
    default:
      return state;
  }
};
