import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders successfully", () => {
  render(<Todo />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it.only("should fire function to remove when triggered", () => {
  const removeTodo = jest.fn();
  const { asFragment, queryByText } = render(
    <Todo removeTodo={removeTodo} task="task" id="1" />
  );
  const button = queryByText("X");
  fireEvent.click(button);
  expect(removeTodo).toHaveBeenCalled();
});
