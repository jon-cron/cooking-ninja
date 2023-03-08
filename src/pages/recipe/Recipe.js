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
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {recipe ? <h1>{recipe.title}</h1> : null}
    </div>
  );
}
