import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";

const defaultProps = {
  todoList: [],
  title: "",
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
  test("Should display complete todo list is empty if there is no data to show", () => {
    setup({
      title: "To-Do",
      todoList: [],
    });
    const emptyLable = screen.getByText("List is empty");
    expect(emptyLable.textContent).toBe("List is empty");
  });

  test("Should display  todo list is empty if there is  data to show", () => {
    const { getByTestId } = setup({
      title: "To-Do",
      todoList: [{ id: 2, title: "Play Pubg", complete: true }],
    });
    const todoList = getByTestId("todo-list");
    expect(todoList).toBeInTheDocument();
  });
});
