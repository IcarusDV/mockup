import React from "react";
import Main from "./src/Main";
import StatusBarProvider from "./src/providers/StatusBarContext";

export default function App() {
  return (
    <StatusBarProvider>
      <Main />
    </StatusBarProvider>
  );
}
