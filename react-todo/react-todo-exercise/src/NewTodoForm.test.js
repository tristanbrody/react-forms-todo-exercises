import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders successfully", () => {
  render(<NewTodoForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("fires function to change value for input", () => {
  // const handleChange = jest.fn();
  // const { asFragment, getByLabelText } = (<NewTodoForm />);
  // const form = getByLabelText('task');
  // fireEvent.change(form);
});
