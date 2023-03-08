import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/btnThemeSlice";

function ButtonTheme(props) {
  const theme = useSelector((state) => state.btnThemeSlice.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="dark:bg-bgLightMode bg-gridBgDarkMode dark:text-textLightMode text-textDarkMode absolute top-[20px] right-2 bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded"
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}

export default ButtonTheme;
