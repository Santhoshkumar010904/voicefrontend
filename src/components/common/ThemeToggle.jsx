import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {

  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
    >
      {
        darkMode ? <FaSun /> : <FaMoon />
      }
    </button>
  );
}

export default ThemeToggle;