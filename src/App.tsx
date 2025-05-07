import "./App.scss";
import Recipe from "./components/Recipe/Recipe";
import recipe_data from "./data/recipe.json";

function App() {


  return (
    <>
      <main>
        <Recipe recipe={recipe_data} />
      </main>
    </>
  );
}

export default App;
