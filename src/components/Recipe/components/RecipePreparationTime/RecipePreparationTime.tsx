import styles from "./RecipePreparationTime.module.scss";

interface PreparationTimeProps {
  preparationTime: { total: string; prep: string; cook: string };
}

function RecipePreparationTime({ preparationTime }: PreparationTimeProps) {
  return (
    <section className={styles["recipe__preparation-time"]}>
      <h3>Preparation time</h3>
      <ul>
        <li>
          <strong>Total</strong>: {preparationTime.total}
        </li>
        <li>
          <strong>Preparation</strong>: {preparationTime.prep}
        </li>
        <li>
          <strong>Cooking</strong>: {preparationTime.cook}
        </li>
      </ul>
    </section>
  );
}

export default RecipePreparationTime;
