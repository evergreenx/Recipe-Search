// import React, { Component } from "react";

function Recipes({ title, calo, image }) {
  return (
   
    
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src={image}              />
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <a class="no-underline hover:underline text-black" href="#">
                  {title}
                </a>
              </h1>
              
              <p>{calo}</p>
            </header>

           
          </article>
        
        </div>
    

  
  );
}

export default Recipes;
