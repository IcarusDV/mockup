import React from "react";
import { StatusBar } from "expo-status-bar";
import AppRoutes from "./AppRoutes";
import useStatusBarEnabled from "./hooks/useStatusBarEnabled";

export default function Main() {
  const { isStatusBarEnabled } = useStatusBarEnabled();

  return (
    <>
      {isStatusBarEnabled ? <StatusBar style="auto" /> : null}
      <AppRoutes />
    </>
  );
}
