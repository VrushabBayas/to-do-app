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

const moveTodoUpward = (id, todoList) => {
  const tempList = [...todoList];
  for (let index = 0; index < tempList.length; index += 1) {
    const element = tempList[index];
    if (element.id === id) {
      const tmp = tempList[index - 1];
      tempList[index - 1] = element;
      tempList[index] = tmp;
    }
  }
  return tempList;
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case todoActions.GET_TODOS:
      return { todoList: state.todoList };
    case todoActions.TOGGLE_TODO:
      return { ...state, ...payload };
    case todoActions.MOVE_TO_DO_UP_WARD: {
      const isCompleted = [
        ...state.completedTodos,
        ...state.inCompletedTodos,
      ].find((todo) => todo.id === payload.id).complete;

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
