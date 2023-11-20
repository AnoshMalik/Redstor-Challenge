import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";


test("increments counter", () => {
    render(<App />);
    
  const counter = screen.getByTestId("counterA");
  const incrementBtn = screen.getByTestId("incrementA");

  fireEvent.click(incrementBtn);
  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("2");
});