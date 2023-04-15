import React from "react";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
