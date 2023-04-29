import React from 'react';
import { useState } from 'react';
import Documents from "@partials/propertyTabs/Documents"
import PriceHistoryChart from "@partials/propertyTabs/PriceHistoryChart"
import AnalysisCalculator from "@partials/propertyTabs/AnalysisCalculator"
import FinancialDetails from "@partials/propertyTabs/FinancialDetails"
import PropertyOverview from "@partials/propertyTabs/PropertyOverview"

const PropertyTabs = (props) => {
  const [selected, setSelected] = useState(props.selected || 0);
  const propertyTabs = [
    {
      id:1,
      tabName:"Price History ",
      component: <PriceHistoryChart />
    },
    {
      id:2,
      tabName:"Analysis Calculator",
      component: <AnalysisCalculator />
    },
    {
      id:3,
      tabName:"Financial Details ",
      component: <FinancialDetails />
    },
    {
      id:4,
      tabName:"Property Overview",
      component: <PropertyOverview />
    },
    {
      id:5,
      tabName:"Documents",
      component: <Documents />
    }
  ];

 
  function handleChange(index) {
    setSelected(index);
  }

  return (
    <>
      <div class="w-full md:w-100 px-4 py-[30px]">
        <ul className="inline flex justify-evenly">
          {propertyTabs.map((elem, index) => {
            let style = index === selected ? 'selected': '';
            return <li className={style} key={index} onClick={() => handleChange(index)}>{elem.tabName}</li>
          })}
        </ul>
                
        <div className="tab bg-theme-light">
        {propertyTabs[selected].component}
          
          </div> 

      </div>
    </>
  );
};

export default PropertyTabs;
