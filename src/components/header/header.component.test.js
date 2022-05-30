import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./header.component";

test("renders header", () => {
  render(
  <MemoryRouter><Header /></MemoryRouter>);
  const header = screen.getByTestId("Header");
  expect(header).toBeInTheDocument();
});