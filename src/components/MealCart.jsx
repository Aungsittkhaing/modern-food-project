import React from "react";
import { BsSearch } from "react-icons/bs";
import "./MealCart.css";
import { Link } from "react-router-dom";
const MealCart = ({ name, image, id }) => {
  return (
    <>
      <div className="relative parent">
        <img
          src={image}
          className="image h-[300px] object-cover rounded-lg"
          alt=""
        />
        <Link to={`/detail/${id}`}>
          <p className="icon flex h-12 w-12 bg-blue-500 items-center justify-center rounded-[100%] absolute top-[40%] left-[40%]">
            <BsSearch className="text-3xl" />
          </p>
        </Link>
      </div>
    </>
  );
};

export default MealCart;
