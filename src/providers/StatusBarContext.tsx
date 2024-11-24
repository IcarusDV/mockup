import React from "react";
import { createContext, ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
}

interface IContext {
  changeStatusBarVisibility: (value: boolean) => void;
  isStatusBarEnabled: boolean;
}

export const StatusBarContext = createContext<IContext>({
  changeStatusBarVisibility: () => {},
  isStatusBarEnabled: true,
});

export default function StatusBarProvider({ children }: IProps) {
  const [isStatusBarEnabled, setIsStatusBarEnabled] = useState(true);

  function changeStatusBarVisibility(value: boolean) {
    setIsStatusBarEnabled(value);
  }

  return (
    <StatusBarContext.Provider
      value={{ isStatusBarEnabled, changeStatusBarVisibility }}
    >
      {children}
    </StatusBarContext.Provider>
  );
}
