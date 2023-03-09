import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = () => {};
export function ThemeProvider({ children }) {
  useReducer(themeReducer, {
    color: "blue",
  });
  return (
    <ThemeContext.Provider value={{ color: "blue" }}>
      {children}
    </ThemeContext.Provider>
  );
}
