"use client"; // Ensure this runs in the client side
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";

interface NavigationContextProps {
  navigateTo: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path); // Next.js navigation
  };

  return (
    <NavigationContext.Provider value={{ navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
