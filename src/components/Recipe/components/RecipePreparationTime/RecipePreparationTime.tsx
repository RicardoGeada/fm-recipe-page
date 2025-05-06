import styles from "./RecipePreparationTime.module.scss";

function RecipePreparationTime() {
  return (
    <>
    {/* preparation time */}
    <section className={styles["recipe__preparation-time"]}>
          <h3>Preparation time</h3>
          <ul>
            <li>
              <strong>Total</strong>: Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation</strong>: 5 minutes
            </li>
            <li>
              <strong>Cooking</strong>: 5 minutes
            </li>
          </ul>
        </section>
    </>
  );
}

export default RecipePreparationTime;
