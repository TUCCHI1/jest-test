import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

test("インクリメントされる", () => {
  render(<Counter />);
  userEvent.click(screen.getByRole("button", { name: "+" }));
  expect(screen.getByText(1)).toBeInTheDocument();
});
