import "./Create.css";

import React, { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
    resetInputs();
  };
  const resetInputs = () => {
    setTitle("");
    setCookingTime("");
    setMethod("");
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
