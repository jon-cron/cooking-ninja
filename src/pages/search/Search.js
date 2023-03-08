import "./Recipe.css";

import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
import RecipeList from "../../components/recipeList/RecipeList.js";

export default function Search() {
  // const { search } = useParams();
  // NOTE I was able to accomplish the same result with less lines of code using useParams. Is it best practice? not sure
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const url = "http://localhost:3000/recipes?q=" + query;

  const { error, isPending, data } = useFetch(url);
  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
      {/* {data == null && <h2>There are no recipes that have {query}</h2>} */}
    </div>
  );
}
