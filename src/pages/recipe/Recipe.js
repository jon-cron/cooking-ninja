import "./Recipe.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
export default function Recipe() {
  const param = useParams();
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/recipes/?id=${param.id}`
  );

  return <div>Recipe</div>;
}
