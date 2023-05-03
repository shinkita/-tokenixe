import  React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import PriceChart from '../PriceChart';
import Accordionprice from './Accordionprice';
const PriceHistoryChart = () => {
  

  const [blocks, setBlocks] = useState({
    block1: true,
    block2: false,
    block3: false,
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
      block2: expand,
      block3: expand,
    });
  };

  const accordionList = [{ title: 'Listing' }, { title: 'Offers' }];

    return (
      <>
    
         <div className="flex flex-col gap-[10px]">
    <div className="text-4xl font-bold text-default text-center pb-[30px]">Price History</div>
    <div class="flex flex-col lg:flex-row gap-[20px]">
  <div class="w-full lg:w-1/2">
  <PriceChart />
</div>
<div class="w-full lg:w-1/2 flex flex-col gap-[10px] lg:gap-[30px] my-4">
  <div class="text-basic text-gray-300">Current Price</div><div class="flex flex-row justify-between">
<div class="flex items-center gap-[5px] lg:gap-[10px]">
  <div class="text-2xl font-bold text-gray-700">$5,200</div>
<div class="text-lg text-gray-300">(2.47USDT)</div>
</div>
<div class="flex items-center gap-[5px]">
  <svg class="iconSvgC text-[#377eff] hover:cursor-pointer css-1ylescl" focusable="false" 
aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowCircleUpIcon" style={{ fontSize: "20px" }}>
  <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 
12s4.48 10 10 10zm-1-10v4h2v-4h3l-4-4-4 4h3z"></path></svg>
<input type="number" placeholder="0" class="p-[2px] w-[100px] focus:outline-none text-gray-700 text-base border 
border-gray-300"/>
<svg class="iconSvgC text-[#377eff] hover:cursor-pointer css-1ylescl" 
focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowCircleDownIcon">
  <path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 
10-10S17.52 2 12 2zm1 10V8h-2v4H8l4 4 4-4h-3z"></path></svg>
</div>
</div>
<div class="flex flex-row gap-[20px] lg:gap-[50px] justify-center mt-[20px]">
  <button class="w-1/2 hover:cursor-pointer flex flex-row justify-center gap-[10px] px-[10px] py-[10px] rounded-lg
bg-primary text-sm font-bold text-white items-center">
  <svg class="iconSvgW css-1t8mnmp"
    focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WalletIcon">
    <path d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-1.86 9.77c-.24.2-.57.28-.88.2L4.15 11.25C4.45 10.52 5.16 10 6 10h12c.67 0 1.26.34 1.63.84l-3.49 2.93zM6 6h12c1.1 0 2 .9 2 2v.55c-.59-.34-1.27-.55-2-.55H6c-.73 0-1.41.21-2 .55V8c0-1.1.9-2 2-2z"></path>
    </svg>
    <div>Buy Now</div>
    </button>
    <button class="w-1/2 hover:cursor-pointer flex flex-row justify-center gap-[10px] px-[10px] py-[10px] rounded-lg bg-white border border-[#377eff] text-sm font-bold text-[#377eff] items-center">
      <svg class="iconSvgC css-1t8mnmp" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SellIcon">
    <path d="m21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z"></path></svg>
    <div>Make Offer</div>
    </button>
    </div>
    </div>
    </div>

    <div className="flex flex-col gap-[10px] ">
        
      
             <dl className="grid gap-10 accordion">
            {
              accordionList.map((item, index) => (
                <Accordionprice  className="w-1/2" key={index} title={item.title} onClick={toggle(index + 1)} expand={blocks[`block${index+1}`]} />
              ))
            }
          </dl>
        
        </div>
     </div>
      </>
    )
   
}
 
  export default PriceHistoryChart;