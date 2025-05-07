export interface Recipe {
  recipe: {
    title: string;
    description: string;
    image: string;
    preparationTime: {
      total: string;
      prep: string;
      cook: string;
    };
    ingredients: string[];
    instructions: { title: string; description: string }[];
    nutrition: {
      calories: string;
      carbs: string;
      protein: string;
      fat: string;
    };
  };
}
