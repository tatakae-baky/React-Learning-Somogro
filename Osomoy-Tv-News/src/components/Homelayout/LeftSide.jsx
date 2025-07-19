import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <p className="font-bold">
        All categories{" "}
        <span className="text-[#D72050]">({categories.length})</span>{" "}
      </p>
      <div className="flex flex-col mt-2">
        {categories.map((category) => (
          <NavLink to={`category/${category.category_id}`} className="cursor-pointer p-2 text-center" key={category.category_id}>{category.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
