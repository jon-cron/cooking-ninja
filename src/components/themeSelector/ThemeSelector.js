import React from "react";
import "./ThemeSelector.css";
import { useTheme } from "../../hooks/useTheme.js";
export default function ThemeSelector() {
  const { color, changeColor } = useTheme();
  return <div>ThemeSelector</div>;
}
