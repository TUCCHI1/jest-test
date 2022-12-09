import { logDOM, render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("Propsがない場合はデフォルト文字列が表示される", () => {
  const title: string = "テスト";
  const { container } = render(<Header title={title} />);
  expect(container.innerHTML).toMatch(title);
  // render(<Header />);
  // // screen.debug();
  // logDOM(screen.getByText("React App"));
});
