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

        {/* ingredients */}
        <section className={styles["recipe__ingredients"]}>
          <h2>Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>

        {/* line */}
        <div className="line--h"></div>

        {/* instructions */}
        <section className={styles["recipe__instructions"]}>
          <h2>Instructions</h2>
          <ol>
            <li>
              <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <strong>Heat the pan:</strong>: Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <strong>Cook the omelette</strong>: Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional)</strong>: When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Enjoy</strong>: Serve hot, with additional salt and pepper
              if needed.
            </li>
            <li>
              <strong>Beat the eggs</strong>: Serve hot, with additional salt
              and pepper if needed.
            </li>
          </ol>
        </section>

        {/* line */}
        <div className="line--h"></div>

        {/* nutrition */}
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
                <td>277kcal</td>
              </tr>
              <tr>
                <th>Carbs</th>
                <td>0g</td>
              </tr>
              <tr>
                <th>Protein</th>
                <td>20g</td>
              </tr>
              <tr>
                <th>Fat</th>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Recipe;
