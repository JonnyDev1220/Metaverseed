import React, { useState, useEffect } from "react";

// night mode switch
const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark-mode");
      document.getElementById("navbar-logo").src = "/White-logo.png";
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark-mode");
      document.getElementById("navbar-logo").src = "/Black-logo.png";
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      document.body.classList.add("dark-mode");
      document.getElementById("navbar-logo").src = "/White-logo.png";
    }
  });

  return (
    <div>
      <button onClick={handleChange}>
        {themeState ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeChanger;
