import styles from "./RecipeHeader.module.scss";

interface RecipeHeaderProps {
  title: string;
  description: string;
}

function RecipeHeader({ title, description }: RecipeHeaderProps) {
  return (
    <section className={styles["recipe__header"]}>
      <h1 className={styles["recipe__title"]}>{title}</h1>
      <p className={styles["recipe__description"]}>{description}</p>
    </section>
  );
}

export default RecipeHeader;
