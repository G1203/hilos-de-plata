import { useTheme } from "../hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa6";
const ThemeThoggle = () => {
  const { toggle, dark } = useTheme();

  return (
    <button
      onClick={toggle}
      className="flex items-center p-2 rounded-full bg-yellow-400 dark:bg-gray-600 hover:bg-yellow-500 dark:hover:bg-gray-700 fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8"
    >
      {!dark ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
      <span className="ml-2 hidden sm:inline">
        {!dark ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
};

export default ThemeThoggle;
