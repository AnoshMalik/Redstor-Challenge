import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("1. Add A - once", () => {
  render(<App />);

  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  fireEvent.click(incrementBtnA);
  expect(counterA).toHaveTextContent("1");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("60");


});

test("2. Add A and B", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const counterB = screen.getByTestId("counterB");
  const incrementBtnA = screen.getByTestId("incrementA");
  const incrementBtnB = screen.getByTestId("incrementB");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnB);
  expect(counterA).toHaveTextContent("1");
  expect(counterB).toHaveTextContent("1");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("90");
});

test("3. Add C,D,B,A", () => {
  render(<App />);
  const counterC = screen.getByTestId("counterC");
  const counterD = screen.getByTestId("counterD");
  const counterB = screen.getByTestId("counterB");
  const counterA = screen.getByTestId("counterA");
  const incrementBtnC = screen.getByTestId("incrementC");
  const incrementBtnD = screen.getByTestId("incrementD");
  const incrementBtnB = screen.getByTestId("incrementB");
  const incrementBtnA = screen.getByTestId("incrementA");

  fireEvent.click(incrementBtnC);
  fireEvent.click(incrementBtnD);
  fireEvent.click(incrementBtnB);
  fireEvent.click(incrementBtnA);
  expect(counterC).toHaveTextContent("1");
  expect(counterD).toHaveTextContent("1");
  expect(counterB).toHaveTextContent("1");
  expect(counterA).toHaveTextContent("1");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("145");
});

test("4. Add A - 2x", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  expect(counterA).toHaveTextContent("2");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("120");
});

test("5. Add A - 3x", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  expect(counterA).toHaveTextContent("3");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("150");
});

test("6. Add A - 4x", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  expect(counterA).toHaveTextContent("4");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("210");
});

test("7. Add A - 5x", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  expect(counterA).toHaveTextContent("5");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("270");
});

test("8. Add A - 6x", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  expect(counterA).toHaveTextContent("6");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("300");
});

test("9. Add AAAB", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  const counterB = screen.getByTestId("counterB");
  const incrementBtnB = screen.getByTestId("incrementB");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnB);

  expect(counterA).toHaveTextContent("3");
  expect(counterB).toHaveTextContent("1");
  
const checkoutButton = screen.getByTestId("checkoutButton");
const checkoutTotal = screen.getByTestId("checkoutTotal");
fireEvent.click(checkoutButton);
expect(checkoutTotal).toHaveTextContent("180");
});

test("10. Add AAABB", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  const counterB = screen.getByTestId("counterB");
  const incrementBtnB = screen.getByTestId("incrementB");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnB);
  fireEvent.click(incrementBtnB);
  expect(counterA).toHaveTextContent("3");
  expect(counterB).toHaveTextContent("2");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("195");
});

test("11. Add AAABBD", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  const counterB = screen.getByTestId("counterB");
  const incrementBtnB = screen.getByTestId("incrementB");
  const counterD = screen.getByTestId("counterD");
  const incrementBtnD = screen.getByTestId("incrementD");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnB);
  fireEvent.click(incrementBtnB);
  fireEvent.click(incrementBtnD);
  expect(counterA).toHaveTextContent("3");
  expect(counterB).toHaveTextContent("2");
  expect(counterD).toHaveTextContent("1");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("220");
});

test("12. Add DABABA", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  const counterB = screen.getByTestId("counterB");
  const incrementBtnB = screen.getByTestId("incrementB");
  const counterD = screen.getByTestId("counterD");
  const incrementBtnD = screen.getByTestId("incrementD");
  fireEvent.click(incrementBtnD);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnB);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnB);
  fireEvent.click(incrementBtnA);
  expect(counterD).toHaveTextContent("1");
  expect(counterB).toHaveTextContent("2");
  expect(counterA).toHaveTextContent("3");

  const checkoutButton = screen.getByTestId("checkoutButton");
  const checkoutTotal = screen.getByTestId("checkoutTotal");
  fireEvent.click(checkoutButton);
  expect(checkoutTotal).toHaveTextContent("220");
});
