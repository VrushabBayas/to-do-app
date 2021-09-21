import { render, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./Reducer/configureStore";
import App from "./App";

const setup = (history) => {
  return render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
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
