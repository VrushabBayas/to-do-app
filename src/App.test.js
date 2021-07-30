import { render, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";

const setup = (history) => {
  return render(
    <Router history={history}>
      <App />
    </Router>
  );
};
describe("App", () => {
  const history = createMemoryHistory();
  afterEach(cleanup);

  it("Should render App component", () => {
    const { getByTestId } = setup(history);
    expect(getByTestId("component-app")).toBeInTheDocument();
  });
});
