/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import React from "react";

export default function ResponsiveComponent({
  desktop: DesktopComponent,
  mobile: MobileComponent,
}) {
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

  return isDesktop ? <DesktopComponent /> : <MobileComponent />;
}
