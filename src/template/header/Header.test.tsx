import { render, screen } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";

test("renders header", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Your pipes/i);
  expect(linkElement).toBeInTheDocument();
});
