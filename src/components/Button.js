import { useTheme } from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme: {theme}{" "}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Click
      </button>
    </div>
  );
}

export default Button;
