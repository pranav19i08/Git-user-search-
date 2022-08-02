//import React from "react";
import styles from "../styles/header.module.css";
import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

function Header(props) {
  const [themeMode, setThemeMode] = useState("Dark");
  function themeToggle() {
    const btn =  document.querySelector("iconDark");
     btn.addEventListener("click",() => {
         document.body.classList.toggle("dark-theme");
         if (themeMode === "Light") {
           setThemeMode("Dark");
         } else {
           setThemeMode("Light");
         }
       });
  }
  return (
    <header>
      <h1 className={styles.headerTitle}>devfinder</h1>
      <button className={styles.iconDark} onClick={themeToggle}>
        <span id="change-theme-name">{themeMode}</span>
        {themeMode === "Light" ? (
          <LightModeIcon sx={{ color: "#FCFCFC" }} />
        ) : (
          <ModeNightIcon sx={{ color: "#FCFCFC" }} />
        )}
      </button>
    </header>
  );
}

export default Header;
