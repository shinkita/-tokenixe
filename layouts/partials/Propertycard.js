import React from 'react';
 import { MdSingleBed, MdShare, MdGroups3 } from "react-icons/md";
 import Image from "next/image";

const PropertyCard = () => {
  return (
<>
    <div className="flex flex-row justify-start items-center gap-[20px] ">
        <div className="flex flex-row gap-2 rounded-full border border-blue-500 p-2 justify-center items-center">
            <MdSingleBed size={30}  className="text-blue-500"/>
            <div className="text-blue-500 text-base">5 Beds | 2,9990 sqft</div>
        </div>
        <div className="flex flex-row gap-2 rounded-full border border-blue-500 p-2 justify-center items-center">
            <img src="images/like.svg" width="20px"  alt="like"/>
            <div className="text-blue-500 text-base">Favorite </div>
        </div>
        <MdShare  size={30} className="text-blue-500 cursor-pointer" />
    </div>
    <div className="text-xl font-bold text-gray-700  py-[25px]">
        Beautiful 5-Bedroom Villa with an Incredible View
    </div>
      <div class="flex flex-row justify-between">
        <div class="flex flex-row gap-[5px] items-center">
            <svg class="iconSvg css-1t8mnmp" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GroupsIcon">
                <path
                    d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
                ></path>
            </svg>
            <div class="text-md text-gray-700">800 Owners</div>
        </div>
        <div class="flex flex-row gap-[5px] items-center">
            <svg class="iconSvg css-1t8mnmp" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhotoLibraryIcon">
                <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path>
            </svg>
            <div class="text-md text-gray-700">1000 Total USDT's</div>
        </div>
        <div class="flex flex-row gap-[5px] items-center">
            <svg class="iconSvg css-1t8mnmp" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VisibilityIcon">
                <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                ></path>
            </svg>
            <div class="text-md text-gray-700">0 Views</div>
        </div>
        <div class="flex flex-row gap-[5px] items-center">
            <svg class="iconSvg css-1t8mnmp" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon">
                <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            <div class="text-md text-gray-700">280 Favorites</div>
        </div>
    </div>
  
    <div class="flex flex-row gap-[5px] items-center py-[25px]">
    <Image src="/images/location.svg"
                    alt="icon"
                    width={10}
                    height={10}/>
             
        <div class="text-md text-gray-400">Los Angeles, United States of America</div>
    </div>
    <div class="flex flex-row gap-[20px]">
        <div class="w-1/2 flex flex-col gap-[20px] p-[20px] border border-gray-300 rounded-lg">
            <div class="text-md text-gray-700">Property price</div>
            <div class="flex flex-row justify-between">
                <div class="text-md font-bold text-gray-700">5,200,000 USD</div>
                <svg class="iconSvg text-gray-300 css-dituub" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DomainIcon">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                </svg>
            </div>
        </div>
        <div class="w-1/2 flex flex-col gap-[20px] p-[20px] border border-gray-300 rounded-lg">
            <div class="text-md text-gray-700">Dividend Yield</div>
            <div class="flex flex-row justify-between">
                <div class="text-md font-bold text-gray-700">7.79%</div>
                <svg class="iconSvg text-gray-300 css-dituub" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoGraphIcon">
                    <path
                        d="M14.06 9.94 12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12l-.94-2.06zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94L4 14zm4.5-5 1.09-2.41L12 5.5 9.59 4.41 8.5 2 7.41 4.41 5 5.5l2.41 1.09L8.5 9zm-4 11.5 6-6.01 4 4L23 8.93l-1.41-1.41-7.09 7.97-4-4L3 19l1.5 1.5z"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
    <div class="flex flex-row gap-[20px]">
        <div class="w-1/2 flex flex-col gap-[20px] p-[20px] border border-gray-300 rounded-lg">
            <div class="text-md text-gray-700">5 YR Expected return</div>
            <div class="flex flex-row justify-between">
                <div class="text-md font-bold text-gray-700">49%</div>
                <svg class="iconSvg text-gray-300 css-dituub" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MoneyIcon">
                    <path d="M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"></path>
                    <path d="M2 4v16h20V4H2zm2 14V6h16v12H4z"></path>
                </svg>
            </div>
        </div>
        <div class="w-1/2 flex flex-col gap-[20px] p-[20px] border border-gray-300 rounded-lg">
            <div class="text-md text-gray-700">Value of One NFT</div>
            <div class="flex flex-row justify-between">
                <div class="text-md font-bold text-gray-700">10/1000</div>
                <svg class="iconSvg text-gray-300 css-dituub" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhotoIcon">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                </svg>
            </div>
        </div>
    </div>
    </>
  );
};

export default PropertyCard;
