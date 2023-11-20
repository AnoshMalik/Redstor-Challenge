import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";


test("increments counter", () => {
    render(<App />);
    
  const counter = screen.getByText("CART");
  const incrementBtn = screen.getByText("each");

  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("CART");
});