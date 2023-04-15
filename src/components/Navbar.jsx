import React, { useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <div
      className="flex justify-between p-7 rounded-lg shadow px-5 py-2 my-5
    "
    >
      <div className="flex items-center gap-1">
        <Link to={"/"}>
          <GiForkKnifeSpoon className="text-3xl text-blue-500" />
        </Link>
        <p className="text-xl font-bold text-blue-500">My Foods</p>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none border-b-2 border-b-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
