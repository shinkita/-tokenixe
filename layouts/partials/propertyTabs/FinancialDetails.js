import React, { useState } from "react";

const accordionItems = [
  { btn: "Transaction", content: "Transaction Details" },
  { btn: "Rental", content: "Rental Details" }
];

const FinancialDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickButton = (index) => {
    setActiveIndex(index);
  };

  const renderAccordionItems = accordionItems.map((item, index) => {
    const isActive = index === activeIndex;
    let content;

    if (isActive) {
      if (item.btn === "Transaction") {
        content = (
          <div>
            <p>Transaction content goes here</p>
          </div>
        );
      } else if (item.btn === "Rental") {
        content = (
          <div>
            <p>Rental content goes here</p>
            <ul>
              <li>Rental Start Date: 01/01/2022</li>
              <li>Rental End Date: 01/01/2023</li>
            </ul>
          </div>
        );
      }
    }

    return (
      <React.Fragment key={index}>
        <button
          className={`accordion ${isActive ? "active" : ""}`}
          onClick={() => onClickButton(index)}
        >
          {item.btn}
        </button>
        <div className={`panel ${isActive ? "" : "hidden"}`}>{content}</div>
      </React.Fragment>
    );
  });

  return <div>{renderAccordionItems}</div>;
};

export default FinancialDetails;
