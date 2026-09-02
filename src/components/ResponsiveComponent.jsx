/* eslint-disable react/prop-types */

import React from "react";
import { useResponsive } from "../contexts/ResponsiveContext.jsx";

const ResponsiveComponent = ({ desktop: DesktopComponent, mobile: MobileComponent }) => {
  const { isDesktop } = useResponsive();

  return isDesktop ? <DesktopComponent /> : <MobileComponent />;
};

export default React.memo(ResponsiveComponent);
