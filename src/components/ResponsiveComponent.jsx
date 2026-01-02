/* eslint-disable react/prop-types */
import { useResponsive } from "../contexts/ResponsiveContext.jsx";
import React from "react";

export default function ResponsiveComponent({
  desktop: DesktopComponent,
  mobile: MobileComponent,
}) {
  const { isDesktop } = useResponsive();

  return isDesktop ? <DesktopComponent /> : <MobileComponent />;
}
