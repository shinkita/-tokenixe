import React, { useState } from 'react';
import Accordion from './Accordion';

const FinancialDetails = () => {
  const [blocks, setBlocks] = useState({
    block1: false,
    block2: false
   
  });

  const toggle = (index) => () => {
    setBlocks(prevBlocks => ({
      ...prevBlocks,
      [`block${index}`]: !prevBlocks[`block${index}`],
    }));
  };

  const toggleExpand = (expand = false) => () => {
    setBlocks({
      block1: expand,
      block2: expand

    });
  };

  const accordionList = [{ title: 'Transaction' }, { title: 'Rental' }];

  return (
    <div className="flex flex-col gap-[10px] ">
        
    <div class="text-4xl font-bold text-default text-center ">Financial Details</div>
         <dl className="grid grid-cols-2 gap-10 accordion">
        {
          accordionList.map((item, index) => (
            <Accordion  className="w-1/2" key={index} title={item.title} onClick={toggle(index + 1)} expand={blocks[`block${index+1}`]} />
          ))
        }
      </dl>
    
    </div>
  );
};

export default FinancialDetails;
