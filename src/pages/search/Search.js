import "./Recipe.css";

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
import RecipeList from "../../components/recipeList/RecipeList.js";

export default function Search() {
  const { search } = useParams();
  // const queryParams = new URLSearchParams(queryString);
  // const query = queryParams.get("q");
  const url = "http://localhost:3000/recipes?q=" + search;

  const { error, isPending, data } = useFetch(url);
  return (
    <div>
      <h2 className="page-title">Recipes including "{search}"</h2>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
