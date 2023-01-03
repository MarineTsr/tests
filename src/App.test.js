import { render, screen, prettyDOM, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { container } = render(<App />);
  console.log(prettyDOM(container));

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("increment counter", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button");
  const counterElement = screen.getByTestId(/counter/i);
  expect(counterElement).toHaveTextContent("0");
  fireEvent.click(buttonElement);
  expect(counterElement).toHaveTextContent("1");
});
