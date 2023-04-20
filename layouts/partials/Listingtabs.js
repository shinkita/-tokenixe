import React, { useState, useCallback, useEffect } from "react";
import config from "@config/config.json";
import { useContext } from 'react';
import { MyContext } from '../components/MenuContext';
import DesktopTabs from "./DesktopTabs";
import MobileTest from "./MobileTest";

 
// const menuItems = [...new Set(config.menuItems.map((Val) => Val.CategoryTitle))];

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
const Listingtabs = () => {
  const {buttons,filter} =useContext(MyContext)
  const isBreakpoint = useMediaQuery(768);
   return (
    <>
 {isBreakpoint ? (
        <div>
          <MobileTest />
        </div>
      ) : (
        <div>
          <DesktopTabs />
        </div>
      )}



   {/* <div className="d-flex justify-content-center">
      {config.menuItems.map((Val,Id) => {
  return (
    <button
      className={setItem === 'All' ? 'active btn-dark text-primary p-1 px-2 mx-5 btn fw-bold' : 'btn-dark p-1 px-2 mx-5 btn fw-bold text-default'}
            onClick={() => filterItem(item.CategoryTitle)}
      key={Id}
    >
      {Val.CategoryTitle}
    </button>
  );
})}
        <button
          className="btn-dark p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(config.listingdata)}
        >
          All
        </button>

         </div>  */}


            
    </>
  );
};
 
export default Listingtabs;