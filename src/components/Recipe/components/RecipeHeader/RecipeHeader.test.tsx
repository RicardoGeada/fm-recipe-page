import { render, screen } from "@testing-library/react";
import RecipeHeader from "./RecipeHeader";

describe("RecipeHeader component", () => {

  test("renders recipe title and description", () => {
    render(<RecipeHeader title="Omelette" description="Delicious and fast" />);
    expect(screen.getByText(/omelette/i)).toBeInTheDocument();
    expect(screen.getByText(/delicious and fast/i)).toBeInTheDocument();
  });
  
});
