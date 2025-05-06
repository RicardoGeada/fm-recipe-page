import styles from "./Recipe.module.scss";
import image from "./../../assets/images/image-omelette.jpeg";
import {
  RecipeHeader,
  RecipePreparationTime,
  RecipeIngredients,
  RecipeInstructions,
  RecipeNutrition,
} from "./components";

function Recipe() {
  return (
    <div className={styles["recipe"]}>
      {/* image */}
      <img
        className={styles["recipe__image"]}
        src={image}
        alt="simple omelette"
      />

      {/* text content */}
      <div className={styles["recipe__text-content"]}>
        <RecipeHeader />
        <RecipePreparationTime />
        <RecipeIngredients />
        <div className="line--h"></div>
        <RecipeInstructions />
        <div className="line--h"></div>
        <RecipeNutrition />
      </div>
    </div>
  );
}

export default Recipe;
