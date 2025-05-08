import { render, screen } from "@testing-library/react";
import RecipeNutrition from "./RecipeNutrition";

describe("RecipeNutrition component", () => {

  test("renders recipe nutrition table data", () => {
    render(<RecipeNutrition nutrition={{calories: "100", carbs: "50", protein: "25", fat: "13"}} />);
    expect(screen.getByText(/100kcal/i)).toBeInTheDocument();
    expect(screen.getByText(/50g/i)).toBeInTheDocument();
    expect(screen.getByText(/25g/i)).toBeInTheDocument();
    expect(screen.getByText(/13g/i)).toBeInTheDocument();
  });
  
});