import "./Recipe.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
export default function Recipe() {
  // NOTE this works just fine but to limit dot notation when can drill into the param by simply using { id } as seen below
  // const param = useParams();
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/?id=${id}`;
  const { data: recipe, isPending, error } = useFetch(url);
  console.log(recipe);
  return (
    <div className="recipe">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe[0].title}</h2>
          <p>Takes {recipe[0].cookingTime} to cook.</p>
          <ul>
            {recipe[0].ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="method">{recipe[0].method}</p>
        </>
      )}
    </div>
  );
}
