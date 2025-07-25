import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

import React from "react";

export default function useTheme() {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("use useTheeme in correct way");
  } else {
    return context;
  }
}
