/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from "uuid";

import strings from "../../../Utils/Constants";
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
const sortTodoByOrder = (order, todoList) => {
  const tmpTodoList = [...todoList];
  if (strings.ASC === order) {
    return tmpTodoList.sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
    );
  }
  return tmpTodoList.sort((a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
  );
};
const updateIncompleteTodoList = (title, todoList = []) => {
  const tmpTodoList = [...todoList];
  const todoObj = { id: uuidv4(), title, complete: false };
  return [...tmpTodoList, todoObj];
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
    case todoActions.SORT_TODO: {
      const { complete, order } = payload;
      const todos = complete ? state.completedTodos : state.inCompletedTodos;
      const listToBeUpdate = complete ? "completedTodos" : "inCompletedTodos";

      return { ...state, [listToBeUpdate]: sortTodoByOrder(order, todos) };
    }
    case todoActions.ADD_TODO: {
      const { title } = payload;
      return {
        ...state,
        inCompletedTodos: updateIncompleteTodoList(
          title,
          state.inCompletedTodos
        ),
      };
    }
    case todoActions.DELETE_TODO: {
      const { complete, id } = payload;
      const todos = complete
        ? [...state.completedTodos]
        : [...state.inCompletedTodos];
      const listToBeUpdate = complete ? "completedTodos" : "inCompletedTodos";
      return {
        ...state,
        [listToBeUpdate]: todos.filter((todo) => todo.id !== id),
      };
    }
    default:
      return state;
  }
};
