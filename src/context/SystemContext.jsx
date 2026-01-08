import { createContext, useContext, useState } from "react";

const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [systemUnlocked, setSystemUnlocked] = useState(false);

  return (
    <SystemContext.Provider value={{ systemUnlocked, setSystemUnlocked }}>
      {children}
    </SystemContext.Provider>
  );
}

export function useSystem() {
  return useContext(SystemContext);
}
