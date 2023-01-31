import React from "react";
import Image from "next/image";

const getRecipeDeatils = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
};

const page = async ({ params }) => {
  const recipeDetail = await getRecipeDeatils(params.id);
  const details = recipeDetail.meals[0];
  const ingrediants = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => details[ingKey])
    .filter(Boolean);
  console.log(ingrediants);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image
          src={details.strMealThumb}
          width={500}
          height={500}
          alt="recipe image"
          className="w-full"
        />
      </div>
      <div className="p-5">
        <h1>
          Recipe Name:{" "}
          <span className="font-bold text-2xl">{details.strMeal}</span>
        </h1>
        <div className="`tags mt-3">
          <p>Ingredients List:</p>
          {ingrediants.map((ing, idx) => (
            <span
              className="bg-blue-500 text-white px-2 py-1 rounded inline-block mr-2 mb-2"
              key={idx}
            >
              {ing}
            </span>
          ))}
        </div>
        {details.strYoutube && (
          <div className="mt-3">
            <p>Video Link:</p>
            <a
              target="_blank"
              className="text-blue-500"
              href={details.strYoutube}
            >
              How to make {details.strMeal}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
