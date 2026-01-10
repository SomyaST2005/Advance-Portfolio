import { createContext, useContext, useState, useEffect } from "react";

const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [systemUnlocked, setSystemUnlocked] = useState(false);

  useEffect(() => {
    setSystemUnlocked(false);
  }, []);

  return (
    <SystemContext.Provider value={{ systemUnlocked, setSystemUnlocked }}>
      {children}
    </SystemContext.Provider>
  );
}

export function useSystem() {
  return useContext(SystemContext);
}
