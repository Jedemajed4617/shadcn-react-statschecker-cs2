import React, { createContext, useContext, Dispatch, SetStateAction } from 'react';

// Define the type for your context value
interface StatsContextType {
  stats: Record<string, number> | null;
  setStats: Dispatch<SetStateAction<Record<string, number> | null>>;
}

// Create the context with an initial value of `null` for both `stats` and `setStats`
const StatsContext = createContext<StatsContextType | undefined>(undefined);

// Create a provider component
export const StatsProvider = ({ children, value }: { children: React.ReactNode; value: StatsContextType }) => {
  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>;
};

// Custom hook to use the StatsContext
export const useStats = () => {
  const context = useContext(StatsContext);
  
  if (!context) {
    throw new Error('useStats must be used within a StatsProvider');
  }

  return context;
};