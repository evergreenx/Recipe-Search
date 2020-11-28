// import React, { Component } from "react";

function Recipes({ title, calo, image, ingredients }) {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img alt="Placeholder" className="block h-auto w-full" src={image} />
        </a>

        <header className="p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {title}
            </a>
          </h1>
        <p>Calories : {calo}</p>

        </header>

        {ingredients.map((ingredient) => (
            <ul className="p-2">
            <li>{ingredient.text}</li>

            </ul>
        ))}

        {}
      </article>
    </div>
  );
}

export default Recipes;
