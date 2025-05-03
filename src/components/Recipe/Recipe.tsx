import styles from "./Recipe.module.scss";
import image from "./../../assets/images/image-omelette.jpeg";

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
        {/* header - title & description */}
        <section className={styles["recipe__header"]}>
          <h1 className={styles["recipe__title"]}>Simple Omelette Recipe</h1>
          <p className={styles["recipe__description"]}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>

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
      </div>
    </div>
  );
}

export default Recipe;
