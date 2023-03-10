import "./ThemeSelector.css";
import { useTheme } from "../../hooks/useTheme.js";
export default function ThemeSelector() {
  const { changeColor } = useTheme();
  const themeColors = ["#58259c", "#249c6b", "#b70233"];
  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map((c) => (
          <div key={c} onClick={changeColor(c)} style={{ background: c }}></div>
        ))}
      </div>
    </div>
  );
}
