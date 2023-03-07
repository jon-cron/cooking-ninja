import "./Home.css";
import { useFetch } from "../../hooks/useFetch.js";
import React from "react";
import { RecipeList } from "../../components/recipeList/RecipeList.js";

export default function Home() {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipes && <RecipeList />}
    </div>
  );
}
