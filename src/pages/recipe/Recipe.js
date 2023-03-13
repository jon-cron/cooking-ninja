import "./Recipe.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch.js";
import { useTheme } from "../../hooks/useTheme.js";
import { projectFirestore } from "../../firebase/config.js";
export default function Recipe() {
  // FIXME the commented code was used when hosting a local json data base and is no longer needed
  // NOTE this works just fine but to limit dot notation when can drill into the param by simply using { id } as seen below
  // const param = useParams();
  // const url = `http://localhost:3000/recipes/?id=${id}`;
  // const { data: recipe, isPending, error } = useFetch(url);
  const { mode } = useTheme();
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("recipes")
      // NOTE .doc() is how we search through our db and with params
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("No recipe by that id");
        }
      });
  }, []);

  return (
    <div className={`recipe ${mode}`}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
