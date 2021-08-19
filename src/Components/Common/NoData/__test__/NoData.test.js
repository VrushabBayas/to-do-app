import { render, screen } from "@testing-library/react";
import TodoList from "../../../ToDos/Components/TodoList";

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
describe("No Data Component", () => {
  test("should display text List is Empty", () => {
    setup({ todoList: [] });
    const noData = screen.getByText("List is empty");
    expect(noData.textContent).toBe("List is empty");
  });
});
