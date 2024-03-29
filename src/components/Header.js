import React, { useContext } from "react";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Header: {theme}{" "}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Click
      </button>
    </div>
  );
}

export default Header;
