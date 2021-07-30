import React from "react";
import { render, cleanup } from "@testing-library/react";
import Layout from "../Layout";

const setup = () => {
  return render(<Layout>To Do App</Layout>);
};
describe("Layout", () => {
  afterEach(cleanup);

  it("Should render Layout ", () => {
    const { getByTestId } = setup();
    expect(getByTestId("component-layout")).toBeInTheDocument();
  });
});
