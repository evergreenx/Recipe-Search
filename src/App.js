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
    <div className="App bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <form>
      <div class="font-sans text-black mb-3 flex items-center justify-center">
  <div class="border rounded overflow-hidden flex">
    <input type="text" class="px-4 py-2" placeholder="Search..."/>
    <button class="flex items-center justify-center px-4 border-l">
      <svg class="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </button>
  
</div>
</div>
      
      </form>

      <div class="flex flex-wrap -mx-1 lg:-mx-4">

      {recipes.map((recipe) => (


        <Recipes key={recipe.recipe.label} title={recipe.recipe.label} calo={recipe.recipe.calories} image={recipe.recipe.image} />

      ))}

      </div>

    </div>
  );
}

export default App;
