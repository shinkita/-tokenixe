import { BiBarChartAlt,BiCoin, BiStopwatch, BiStats} from "react-icons/bi";
const PropertyOverview = () => {
    return <div>


<div class="flex flex-col lg:flex-row gap-[20px]">
    <div class="w-full lg:w-1/2 flex flex-col gap-[30px]">
        <div class="text-4xl font-bold text-gray-700 text-center">Property Info</div>
        <div class="flex flex-col gap-[30px]">
            <div class="flex flex-row">
                <div class="w-1/2 flex flex-col gap-[20px] items-center">
                <div className="p-4 bg-gray-100 rounded-full"><BiCoin size={32} /></div>
                    <div
                        class="w-2/3 flex flex-col">
                        <div class="text-basic text-gray-500 text-center">Minimum. amount</div>
                        <div class="text-lg text-gray-700 font-bold text-center">5,200 USDT</div>
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-[20px] items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiBarChartAlt size={32} /></div>
                <div
                    class="w-2/3 flex flex-col">
                    <div class="text-basic text-gray-500 text-center">Number of USDT holders</div>
                    <div class="text-lg text-gray-700 font-bold text-center">800</div>
            </div>
        </div>
    </div>
    <div class="flex flex-row">
        <div class="w-1/2 flex flex-col gap-[20px] items-center">
        <div className="p-4 bg-gray-100 rounded-full"><BiStopwatch size={32} /></div>
            <div
                class="w-2/3 flex flex-col">
                <div class="text-basic text-gray-500 text-center">Suggested holding period</div>
                <div class="text-lg text-gray-700 font-bold text-center">5 Years</div>
        </div>
    </div>
    <div class="w-1/2 flex flex-col gap-[20px] items-center">
    <div className="p-4 bg-gray-100 rounded-full"><BiCoin size={32} /></div>
          
      
        <div
            class="w-2/3 flex flex-col">
            <div class="text-basic text-gray-500 text-center">Annual Rent</div>
            <div class="text-lg text-gray-700 font-bold text-center">405,080 USDT</div>
    </div>
</div>
</div>
</div>
</div>
<div class="w-full lg:w-1/2 flex flex-col gap-[30px]">
    <div class="text-4xl font-bold text-gray-700 text-center">Rental Yields</div>
    <div class="flex flex-col gap-[30px]">
        <div class="flex flex-row">
            <div class="w-1/2 flex flex-col gap-[20px] items-center">
            <div className="p-4 bg-primary rounded-full text-white"><BiStats size={32} /></div> 
                <div
                    class="w-2/3 flex flex-col">
                    <div class="text-basic text-gray-500 text-center">Expected Dividend Yield</div>
                    <div class="text-lg text-gray-700 font-bold text-center">7.79 %</div>
            </div>
        </div>
        <div class="w-1/2 flex flex-col gap-[20px] items-center">
        <div className="p-4 bg-primary rounded-full text-white"><BiStats size={32} /></div> 
            <div
                class="w-2/3 flex flex-col">
                <div class="text-basic text-gray-500 text-center">Gross yield</div>
                <div class="text-lg text-gray-700 font-bold text-center">12.79 %</div>
        </div>
    </div>
</div>
<div class="flex flex-row">
    <div class="w-1/2 flex flex-col gap-[20px] items-center">
    <div className="p-4 bg-primary rounded-full text-white"><BiStats size={32} /></div> 
        <div
            class="w-2/3 flex flex-col">
            <div class="text-basic text-gray-500 text-center">5 YR Expected Return</div>
            <div class="text-lg text-gray-700 font-bold text-center">48.95 %</div>
    </div>
</div>
<div class="w-1/2 flex flex-col gap-[20px] items-center">
<div className="p-4 bg-primary rounded-full text-white"><BiStats size={32} /></div> 
    <div
        class="w-2/3 flex flex-col">
        <div class="text-basic text-gray-500 text-center">Devidend Frequency</div>
        <div class="text-lg text-gray-700 font-bold text-center">Monthly</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>;
  }
  
  export default PropertyOverview;