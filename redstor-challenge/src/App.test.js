import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("1. Add A - once", () => {
  render(<App />);

  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  fireEvent.click(incrementBtnA);
  expect(counterA).toHaveTextContent("1");
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
});

test("4. Add A - 2x", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  expect(counterA).toHaveTextContent("2");
});

test("5. Add A - 3x", () => {
  render(<App />);
  const counterA = screen.getByTestId("counterA");
  const incrementBtnA = screen.getByTestId("incrementA");
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  fireEvent.click(incrementBtnA);
  expect(counterA).toHaveTextContent("3");
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
});

