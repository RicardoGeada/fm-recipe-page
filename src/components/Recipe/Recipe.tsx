import styles from "./Recipe.module.scss";
import {
  RecipeHeader,
  RecipePreparationTime,
  RecipeIngredients,
  RecipeInstructions,
  RecipeNutrition,
} from "./components";
import type { Recipe } from "./types/Recipe.type";

function Recipe({ recipe }: Recipe) {
  return (
    <div className={styles["recipe"]}>
      {/* image */}
      <img
        className={styles["recipe__image"]}
        src={`images/${recipe.image}`}
        alt={recipe.image}
      />

      {/* text content */}
      <div className={styles["recipe__text-content"]}>
        <RecipeHeader title={recipe.title} description={recipe.description} />
        <RecipePreparationTime preparationTime={recipe.preparationTime} />
        <RecipeIngredients ingredients={recipe.ingredients} />
        <div className="line--h"></div>
        <RecipeInstructions instructions={recipe.instructions} />
        <div className="line--h"></div>
        <RecipeNutrition nutrition={recipe.nutrition} />
      </div>
    </div>
  );
}

export default Recipe;
