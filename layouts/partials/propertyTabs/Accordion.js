import React from 'react';

function Accordion(props) {
  const { title, expand, onClick } = props;
  
  return (
    <div>
      <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
        {title}
      </dt>
      <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
        <p> <div className="flex flex-col gap-[20px]">
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Property Listing Price :</div>
        <div className="text-sm text-gray-700">USD 4,1000,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm font-bold text-gray-700">Transaction Costs</div>
        <div className="text-sm font-bold text-gray-700">USD 400,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Title Search &amp; Insurance (0.5% - 1%)</div>
        <div className="text-sm text-gray-700">USD 40,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Recording Fees (0.2% - 0.5%)</div>
        <div className="text-sm text-gray-700">USD 20,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Legal Fees (0.5% - 1%)</div>
        <div className="text-sm text-gray-700">USD 40,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Taxes (1%)</div>
        <div className="text-sm text-gray-700">USD 40,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Broker Fee (3%)</div>
        <div className="text-sm text-gray-700">USD 120,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Renovation Costs (2%)</div>
        <div className="text-sm text-gray-700">USD 80,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Metropoly fee (1.5%)</div>
        <div className="text-sm text-gray-700">USD 60,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm font-bold text-[#377eff]">Total Acquisition Cost :</div>
        <div className="text-sm font-bold text-[#377eff]">USD 4,500,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Total Number of NFTs :</div>
        <div className="text-sm text-gray-700">1,000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm text-gray-700">Value of One NFT :</div>
        <div className="text-sm text-gray-700">1 / 1000</div>
    </div>
    <div className="flex flex-row justify-between">
        <div className="text-sm font-bold text-[#377eff]">Mint Price Per NFT :</div>
        <div className="text-sm font-bold text-[#377eff]">USD 4,500</div>
    </div>
</div>       
        </p>
      </dd>
    </div>
  );
}

export default Accordion;
