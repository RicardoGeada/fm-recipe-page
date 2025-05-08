import { render, screen } from "@testing-library/react";
import RecipeIngredients from "./RecipeIngredients";

describe("RecipeIngredients component", () => {

  test("renders recipe ingredients list", () => {
    render(<RecipeIngredients ingredients={["One Egg", "Salt", "Pepper"]} />);
    expect(screen.getByText(/one egg/i)).toBeInTheDocument();
    expect(screen.getByText(/salt/i)).toBeInTheDocument();
    expect(screen.getByText(/pepper/i)).toBeInTheDocument();
  });
  
});