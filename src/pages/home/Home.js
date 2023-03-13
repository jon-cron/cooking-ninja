import "./Home.css";
import { projectFirestore } from "../../firebase/config.js";
// import { useFetch } from "../../hooks/useFetch.js";
import React, { useEffect, useState } from "react";
import RecipeList from "../../components/recipeList/RecipeList.js";

export default function Home() {
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsPending(true);
    // NOTE snapshot is a reference to all of the data gotten from the .get()
    // NOTE this was previously a get statement but by using onSnapshot makes this data reactive and will change the data on the page if there are any changes to the data
    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No recipes");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    return () => unsub();
  }, []);
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
