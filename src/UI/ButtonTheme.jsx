import React from "react";
import { useEffect, useState } from "react";

function ButtonTheme(props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="dark:bg-bgLightMode bg-gridBgDarkMode dark:text-textLightMode text-textDarkMode absolute top-[20px] right-2 bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded"
      onClick={handleChangeTheme}
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}

export default ButtonTheme;
