import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
const Details = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState({});
  useEffect(() => {
    fetchMeal();
  }, []);
  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setMeals(meals[0]);
    console.log(meals[0]);
  };
  return (
    <div className="flex mx-auto w-[80%] gap-10 items-center h-screen">
      <img
        src={meals.strMealThumb}
        className="h-[500px] rounded object-cover"
      />
      <div className="">
        <h2 className="text-2xl font-semibold text-gray-500 tracking-wide mb-5">
          {meals.strMeal}
        </h2>
        <h2 className="text-2xl font-semibold text-gray-500 tracking-wide mb-5">
          {meals.strArea}
        </h2>
        <h2 className="text-2xl font-semibold text-gray-500 tracking-wide mb-5">
          {meals.strCategory}
        </h2>
        <p className="text-gray-600 tracking-wider leading-8">
          {meals.strInstructions}
        </p>
        <a href={meals.strYoutube}>
          <BsYoutube className="text-4xl text-red-600" />
        </a>
      </div>
    </div>
  );
};

export default Details;
