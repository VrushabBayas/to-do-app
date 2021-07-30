import React from "react";
import { render, cleanup } from "@testing-library/react";

import Header from "../Header";

const setup = () => {
  return render(<Header />);
};
describe("Layout", () => {
  afterEach(cleanup);

  it("Should Header Component", () => {
    const { getByTestId } = setup();
    expect(getByTestId("component-header")).toBeInTheDocument();
  });
});
