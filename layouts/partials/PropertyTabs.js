import React, { useState, useCallback, useEffect } from "react";
import DesktopPropertyTabs from "./DesktopPropertyTabs";
import MobilePropertyTabs from "./MobilePropertyTabs";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);
 
  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(`(max-width:${width}px)`);
      media.addEventListener('change', updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener('change', updateTarget);
    }
  }, [width, updateTarget]);

  return targetReached;
};

const PropertyTabs = () => {
  
  const isBreakpoint = useMediaQuery(768);

  return (
    <>
      {isBreakpoint ? (
        <div className="flex flex-col w-full">
          <MobilePropertyTabs />
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <DesktopPropertyTabs />
        </div>
      )}

   
    </>
  );
};

export default PropertyTabs;
