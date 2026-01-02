import { createContext, useContext, useState, useEffect, useRef } from "react";
import React from "react";

const ResponsiveContext = createContext({ isDesktop: true });

// eslint-disable-next-line react/prop-types
export function ResponsiveProvider({ children }) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 500 : true
  );
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsDesktop(window.innerWidth > 500);
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={{ isDesktop }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsive() {
  return useContext(ResponsiveContext);
}
