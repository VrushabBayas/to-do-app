import { render } from "@testing-library/react";
import TodoList from "../TodoList";

const defaultProps = {
  todoList: [],
  title: "Todo List",
  onCheckBoxclick: jest.fn(),
  moveTodo: jest.fn(),
  sortTodos: jest.fn(),
  deleteTodo: jest.fn(),
};
/**
 * @function setup
 * @param {object} props
 * @returns {Object}
 */
const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return render(<TodoList {...setUpProps} />);
};
describe("[TodoList-Component]", () => {
  test("should display complete todo list is empty if ther is no data to show", () => {
    setup();
  });
});
