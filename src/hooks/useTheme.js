import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
// NOTE to use hooks allows label the file useSOMETHING...
export const useTheme = () => {
  const context = useContext(ThemeContext);
};
