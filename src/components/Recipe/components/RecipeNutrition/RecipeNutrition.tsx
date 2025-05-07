import styles from "./RecipeNutrition.module.scss";

interface NutritionProps {
  nutrition: {
    calories: string;
    carbs: string;
    protein: string;
    fat: string;
  };
}

function RecipeNutrition({ nutrition }: NutritionProps) {
  return (
    <section className={styles["recipe__nutrition"]}>
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Calories</th>
            <td>{nutrition.calories}kcal</td>
          </tr>
          <tr>
            <th>Carbs</th>
            <td>{nutrition.carbs}g</td>
          </tr>
          <tr>
            <th>Protein</th>
            <td>{nutrition.protein}g</td>
          </tr>
          <tr>
            <th>Fat</th>
            <td>{nutrition.fat}g</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default RecipeNutrition;
