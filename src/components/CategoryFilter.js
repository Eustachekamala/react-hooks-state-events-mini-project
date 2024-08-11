import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ onCategoryChange, selectedCategory}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
