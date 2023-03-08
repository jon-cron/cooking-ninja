import "./Recipe.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
export default function Recipe() {
  // NOTE this works just fine but to limit dot notation when can drill into the param by simply using { id } as seen below
  // const param = useParams();
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes/?id=${id}`);
  console.log(recipe);
  return <div>{id}</div>;
}
