import { render, screen } from "@testing-library/react";
import RecipePreparationTime from "./RecipePreparationTime";

describe("RecipePreparationTime component", () => {

  test("renders recipe preparationtime table data", () => {
    render(<RecipePreparationTime preparationTime={{total: "10 minutes", prep: "3 minutes", cook: "7 minutes"}} />);
    expect(screen.getByText(/10 minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/7 minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/3 minutes/i)).toBeInTheDocument();
  });
  
});