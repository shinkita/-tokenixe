import React, { useState } from "react";
import Documents from "@partials/propertyTabs/Documents"
import PriceHistoryChart from "@partials/propertyTabs/PriceHistoryChart"
import AnalysisCalculator from "@partials/propertyTabs/AnalysisCalculator"
import FinancialDetails from "@layouts/partials/propertyTabs/FinancialDetails"
import PropertyOverview from "@partials/propertyTabs/PropertyOverview"
const DesktopPropertyTabs=(props)=>{
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
        tabName:"Property Overview",
        component: <PropertyOverview />
      },
      {
        id:4,
        tabName:"Financial Details ",
        component: <FinancialDetails />
       
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
      
      <div className="flex flex-col px-0 py-[10px]">
        <ul className="tabsitems flex justify-evenly flex-wrap mb-6">
          
              {propertyTabs.map((elem, index) => {
                let style = index === selected ? 'selected': '';
                return <li className={style} key={index} onClick={() => handleChange(index)}>{elem.tabName}</li>
              })}
            </ul>
                    
            <div className="tab bg-theme-light py-[60px]">
            {propertyTabs[selected].component}
              
              </div> 
    </div>
       
        </>
      );
    };
export default DesktopPropertyTabs;