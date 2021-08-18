import { render } from "@testing-library/react";
import TodoList from "../TodoList";

describe("[TodoList-Component]", () => {
  test("should display complete todo list is empty if ther is no data to show", () => {
    render(<TodoList />);
  });
});
