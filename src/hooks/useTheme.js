import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
// NOTE to use hooks allows label the file useSOMETHING...
export const useTheme = () => {
  const context = useContext(ThemeContext);
  // NOTE this is useful for debugging when we only wrap certain aspects of the application with this context.
  if (context === undefined) {
    throw new Error("useTheme() must be used within a themeProvider");
  }
  return context;
};
