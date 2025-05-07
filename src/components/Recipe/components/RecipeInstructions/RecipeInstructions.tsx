import styles from "./RecipeInstructions.module.scss";

interface InstructionsProps {
  instructions: { title: string; description: string }[];
}

function RecipeInstructions({ instructions }: InstructionsProps) {
  const instructionListElements = instructions.map(
    (instruction: { title: string; description: string }, index: number) => {
      return (
        <li key={index}>
          <strong>{instruction.title}</strong>: {instruction.description}
        </li>
      );
    }
  );

  return (
    <section className={styles["recipe__instructions"]}>
      <h2>Instructions</h2>
      <ol>{instructionListElements}</ol>
    </section>
  );
}

export default RecipeInstructions;
