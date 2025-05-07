import styles from "./RecipeIngredients.module.scss";

interface IngredientsProps {
  ingredients: string[];
}

function RecipeIngredients({ ingredients }: IngredientsProps) {
  
  const ingredientListElements = ingredients.map(
    (ingredient: string, index: number) => {
      return <li key={index}>{ingredient}</li>;
    }
  );

  return (
    <section className={styles["recipe__ingredients"]}>
      <h2>Ingredients</h2>
      <ul>{ingredientListElements}</ul>
    </section>
  );
}

export default RecipeIngredients;
