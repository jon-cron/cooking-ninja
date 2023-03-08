import "./Create.css";

import React, { useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch.js";
import { useNavigate } from "react-router-dom";
export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const { postData, data } = useFetch("http://localhost:3000/recipes", "POST");

  // NOTE using useRef to grab the input field
  const ingredientInput = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, method, cookingTime, ingredients);
    postData({
      title,
      method,
      cookingTime: cookingTime + "minutes",
      ingredients,
    });
    resetInputs();
    setTimeout(() => {
      if (data != null) {
        navigate("/");
      }
    }, 500);
  };
  const addIngredient = (e) => {
    e.preventDefault();
    // NOTE trim removes unwanted white space
    const ing = ingredient.trim();
    // NOTE checking for an ingredients and then checking if we already have that ingredient
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setIngredient("");
    // NOTE using this ref we can refocus on the input field to allow the  user to immediately start typing a new ingredient without having to click of the input
    ingredientInput.current.focus();
  };
  const resetInputs = () => {
    setTitle("");
    setCookingTime("");
    setMethod("");
    setIngredients([]);
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      {/* NOTE onSubmit automatically passes the event or "e" to the function */}
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Recipe Ingredients:</span>
          <div>
            <input
              type="text"
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
              ref={ingredientInput}
            />
            <button className="btn" type="btn" onClick={addIngredient}>
              add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>
        <label>
          <span>Recipe Method:</span>
          <textarea
            required
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          />
        </label>
        <label>
          <span>Recipe Cooking Time (minutes):</span>
          <input
            type="number"
            required
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>
        <button type="btn">Submit</button>
      </form>
    </div>
  );
}
