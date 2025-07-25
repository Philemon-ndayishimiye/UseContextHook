import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw Error("useUser must be used within provider");
  } else {
    return context;
  }
}
