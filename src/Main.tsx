import React from "react";
import { StatusBar } from "expo-status-bar";
import AppRoutes from "./AppRoutes";
import useStatusBarEnabled from "./hooks/useStatusBarEnabled";
import AuthProvider from "./providers/AuthProvider";

export default function Main() {
  const { isStatusBarEnabled } = useStatusBarEnabled();

  return (
    <AuthProvider>
      {isStatusBarEnabled ? <StatusBar style="auto" /> : null}
      <AppRoutes />
    </AuthProvider>
  );
}
