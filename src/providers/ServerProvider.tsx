import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IProps {
  children: ReactNode;
}

interface IContext {
  origin: string;
  setOrigin: (value: string) => void;
}

export const ServerContext = createContext({ origin: "", setOrigin: () => {} });

export default function ServerProvider({ children }: IProps) {
  const [origin, setOrigin] = useState("");

  return (
    <ServerContext.Provider value={{ origin, setOrigin }}>
      {children}
    </ServerContext.Provider>
  );
}
