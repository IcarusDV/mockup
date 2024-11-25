import React from "react";
import { StatusBar } from "expo-status-bar";
import AppRoutes from "./AppRoutes";
import useStatusBarEnabled from "./hooks/useStatusBarEnabled";
import AuthProvider from "./providers/AuthProvider";
import ServerProvider from "./providers/ServerProvider";

export default function Main() {
  const { isStatusBarEnabled } = useStatusBarEnabled();

  return (
    <ServerProvider>
      <AuthProvider>
        {isStatusBarEnabled ? <StatusBar style="auto" /> : null}
        <AppRoutes />
      </AuthProvider>
    </ServerProvider>
  );
}
