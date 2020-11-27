import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Recipes from "../src/Recipes";

function App() {
  const APP_ID = "7eacc5e2";
  const API_KEY = "9a645d8682cce8be15d64b6eef45bccd";

  const [recipes, setRecipes] = useState([]);
  const EndPoint = ``;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
    );
    const data = await res.json();

    console.log(data.hits);

    setRecipes(data.hits);
  };
  return (
    <div className="App">
      <form>
        <input type="text" name="" id="" className="input__search" />
        <button type="submit" className="btn"></button>
      </form>

      {recipes.map((recipe) => (
        <Recipes title={recipe.recipe.label} calo={recipe.recipe.calories} image={recipe.recipe.image} />
      ))}
    </div>
  );
}

export default App;
