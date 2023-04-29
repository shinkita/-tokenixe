const AnalysisCalculator = () => {
    return <div>

<div className="flex flex-col gap-[20px] p-[20px]">
    <div className="text-4xl font-bold text-gray-700 text-center py-[50px]">How much can you earn with this Property?*</div>
    <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-0">
        <div className="w-full lg:w-2/3 flex flex-col gap-[20px] pr-[20px] border-r-none lg:border-r border-gray-300">
            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col lg:flex-row gap-[20px]">
                    <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
                        <div className="text-basic text-gray-700">Initial Amount</div>
                        <input placeholder="USD 20,000" type="number" className="p-[5px] focus:outline-none bg-white rounded"/></div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
                        <div className="text-basic text-gray-700">Expected Annual Appreciaton</div>
                        <input placeholder="2 %" type="number" className="p-[5px] focus:outline-none bg-white rounded"/></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[20px]">
                    <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
                        <div className="text-basic text-gray-700">Net Dividend Yield</div>
                        <input placeholder="7.79 %" type="number" className="p-[5px] focus:outline-none bg-white rounded"/></div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
                        <div className="text-basic text-gray-700">Holding Period</div>
                        <input placeholder="5 Years" type="number" className="p-[5px] focus:outline-none bg-white rounded"/></div>
                </div>
            </div></div>
        <div className="w-full lg:w-1/3 flex flex-col gap-[20px] lg:gap-[50px] ml-[20px] pr-[40px] lg:pr-0">
            <div className="flex flex-col gap-[5px] lg:gap-[20px]">
                <div className="text-basic text-center lg:text-left text-gray-700">Total Average Annualized Return</div>
                <div className="text-basic text-center lg:text-left font-bold text-gray-700">9.79%</div>
            </div>
            <div className="flex flex-col gap-[5px] lg:gap-[20px]">
                <div className="text-basic text-center lg:text-left text-gray-700">Total Rental Income</div>
                <div className="text-basic text-center lg:text-left font-bold text-gray-700">USD 7,790</div>
            </div>
            <div className="flex flex-col gap-[5px] lg:gap-[20px]">
                <div className="text-basic text-center lg:text-left text-gray-700">Expected Capital Appreciation</div>
                <div className="text-basic text-center lg:text-left font-bold text-gray-700">USD 2,000</div>
            </div>
            <div className="flex flex-col gap-[5px] lg:gap-[20px]">
                <div className="text-basic text-center lg:text-left text-gray-700">Total Return</div>
                <div className="text-basic text-center lg:text-left font-bold text-gray-700">USD 9,790</div>
            </div>
            <div className="flex flex-col gap-[5px] lg:gap-[20px]">
                <div className="text-basic text-center lg:text-left font-basic text-gray-500">Total Expected Value After 5 Years</div>
                <div className="text-2xl text-center lg:text-left font-bold text-[#377eff]">USD 29,790</div>
            </div>
        </div>
    </div>
    <div className="flex flex-row justify-center"><button className="rounded-xl bg-[#377eff] px-[20px] py-[10px] text-lg text-white">BUY NOW</button></div>
    <div className="text-sm text-gray-500 text-center mb-[20px]">This calculator is for illustrative purposes only. Buying a real-estate NFT carries risk and you may not receive the anticipated returns.</div>
</div>


    </div>;
  }
  
  export default AnalysisCalculator;