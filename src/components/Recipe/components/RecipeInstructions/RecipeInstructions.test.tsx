import { render, screen } from "@testing-library/react";
import RecipeInstructions from "./RecipeInstructions";

describe("RecipeInstructions component", () => {

  test("renders recipe instructions list", () => {
    render(<RecipeInstructions instructions={[{title: "Beat the eggs", description: "In a bowl ..."}]} />);
    expect(screen.getByText(/beat the eggs/i)).toBeInTheDocument();
    expect(screen.getByText(/in a bowl/i)).toBeInTheDocument();
  });
  
});