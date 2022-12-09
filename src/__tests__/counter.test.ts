import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../hooks/counter";

describe("Counter Hooks", () => {
  test("インクリメントされる", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("デクリメントされる", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
