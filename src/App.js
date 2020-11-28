import { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Recipes from "../src/Recipes";

function App() {
  const APP_ID = "7eacc5e2";
  const API_KEY = "9a645d8682cce8be15d64b6eef45bccd";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  // const EndPoint = ``;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    );
    const data = await res.json();

    console.log(data.hits);

    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={getSearch}>
        <div className="font-sans text-black mb-3 flex items-center justify-center">
          <div className="border rounded overflow-hidden flex">
            <input
              type="search"
              value={search}
              onChange={updateSearch}
              className="px-4 py-2"
              placeholder="Search Food Recipe"
            />
            <button
              className="flex items-center justify-center px-4 border-l"
              type="submit"
            >
              <svg
                className="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calo={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

      <hr class="border-b m-0" />
      <footer class="p-2 text-center">

    
        <img src="../api.jpeg" alt="edamam" />
        <h2 className="">Created by Ido Evergreen</h2>
        <div className="icon__pack">
          <a href="https://github.com/evergreen2001">
            <i class="fa fa-github"></i>
          </a>

          <a href="https://twitter.com/idoevergreen">
            <i class="fa fa-twitter"></i>
          </a>
         
        </div>
      </footer>
    </div>
  );
}

export default App;
