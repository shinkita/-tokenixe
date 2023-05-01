import React, { useState, useRef } from "react";
import Documents from "@partials/propertyTabs/Documents";
import PriceHistoryChart from "@partials/propertyTabs/PriceHistoryChart";
import AnalysisCalculator from "@partials/propertyTabs/AnalysisCalculator";
import FinancialDetails from "@partials/propertyTabs/FinancialDetails";
import PropertyOverview from "@partials/propertyTabs/PropertyOverview";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const propertyTabs = [
  {
    id: 1,
    tabName: "Price History ",
    component: <PriceHistoryChart />,
  },
  {
    id: 2,
    tabName: "Analysis Calculator",
    component: <AnalysisCalculator />,
  },
  {
    id: 3,
    tabName: "Property Overview",
    component: <PropertyOverview />,
  },
  {
    id: 4,
    tabName: "Financial Details ",
    component: <FinancialDetails />,
  },
  {
    id: 5,
    tabName: "Documents",
    component: <Documents />,
  },
];

const MobilePropertyTabs = () => {
  const sliderRef = useRef(null);
  const [selected, setSelected] = useState(0);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  const handleChange = (index) => {
    setSelected(index);
  };

  return (
    <>
      <div className="ltabs mx-[20px] ">
        <div className="relative flex items-center">
          <GrFormPrevious
            className="arrowBtn opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
          <div
            ref={sliderRef}
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-[12px]"
          >
            {propertyTabs.map((elem, index) => {
              let style = index === selected ? "selected" : "";
              return (
                <button
                  onClick={() => handleChange(index)}
                  className={`btntabs border-none text-default bg-zinc-50 p-2 px-2 mr-5 btn ${style}`}
                  key={index}
                >
                  {elem.tabName}
                </button>
              );
            })}
           
</div>
<GrFormNext
            className="arrowBtn opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
</div> 
            <div className="tab bg-theme-light">
              {propertyTabs[selected].component}
            </div>
          
          
        </div>
     
    </>
  );
};

export default MobilePropertyTabs;
