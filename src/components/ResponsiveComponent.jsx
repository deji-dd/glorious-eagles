/* eslint-disable react/prop-types */
import { useResponsive } from "../contexts/ResponsiveContext.jsx";
import React from "react";

const ResponsiveComponent = ({
  desktop: DesktopComponent,
  mobile: MobileComponent,
}) => {
  const { isDesktop } = useResponsive();

  return isDesktop ? <DesktopComponent /> : <MobileComponent />;
};

export default React.memo(ResponsiveComponent);
