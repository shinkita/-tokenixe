import React from 'react';

function Accordionprice(props) {
  const { title, expand, onClick } = props;
  
  return (
    <div>
      <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
        {title}
      </dt>
      <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
      <div className="flex flex-col gap-[20px] py-5">
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">Price</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">Ethereum</div>
        <div className="hidden lg:flex w-1/5 text-sm font-bold text-gray-700">Floor Difference</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">Expiration</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">From</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.88 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">1.9 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 4 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">SuperNova</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.78 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">3.8 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 8 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">MikelovesNFT</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.72 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">5.7 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 9 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">June24x</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.55 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">7.7 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 10 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">KevinCranel</div>
    </div>
</div>

      </dd>
    </div>
  );
}

export default Accordionprice;
