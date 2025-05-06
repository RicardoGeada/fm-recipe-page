import styles from "./RecipeHeader.module.scss";

function RecipeHeader() {
  return (
    <>
    {/* header - title & description */}
    <section className={styles["recipe__header"]}>
          <h1 className={styles["recipe__title"]}>Simple Omelette Recipe</h1>
          <p className={styles["recipe__description"]}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>
    </>
  );
}

export default RecipeHeader;