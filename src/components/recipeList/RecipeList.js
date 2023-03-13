import "./RecipeList.css";

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme.js";
import Trashcan from "../../assets/Trashcan.svg";
import { projectFirestore } from "../../firebase/config.js";
export default function RecipeList({ recipes }) {
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return <div className="error">No recipes found</div>;
  }
  const handleClick = (id) => {
    try {
      projectFirestore.collection("recipes").doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            alt="delete"
            src={Trashcan}
            className="delete"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
