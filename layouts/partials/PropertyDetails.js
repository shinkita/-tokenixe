import React from 'react';
import { BiBasketball,BiFork,BiLeaf,BiWine,BiCar,BiCctv,BiDumbbell,BiSwim,BiSpa,BiBusSchool,BiCartAlt} from "react-icons/bi";
const PropertyDetails = () => {
  return (
  <>
  <div class="flex flex-col gap-[20px] px-5 lg:px-[10px] py-[20px] lg:py-[50px]">
    <div class="text-4xl font-bold text-gray-700 text-center py-[20px]">Overview</div>
    <div class="flex flex-col lg:flex-row gap-[50px]">
    <div class="w-full lg:w-1/2 flex flex-col gap-[30px]">
        <div class="text-lg font-bold text-gray-700 text-center lg:text-left">About the Property</div>
        <div class="text-basic text-gray-700 text-center lg:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="text-basic text-gray-700 text-center lg:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
    <div class="w-full lg:flex flex-col gap-[20px] w-1/2">
        <div class="flex flex-row">
        <div class="w-1/5 flex flex-col items-center justify">
                <div className="p-4 bg-gray-100 rounded-full"><BiBasketball size={32} /></div>
          <div className="text-gray-700 mt-4">Playground</div>
            </div>
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiCartAlt size={32} /></div>
 <div className="text-gray-700 mt-4">Store</div>
        </div>
        <div class="w-1/5 flex flex-col items-center">
        <div className="p-4 bg-gray-100 rounded-full"><BiBasketball size={32} /></div>
          <div className="text-gray-700 mt-4">Playground</div>
    </div>
    <div class="w-1/5 flex flex-col items-center">
    <div className="p-4 bg-gray-100 rounded-full"><BiSwim size={32} /></div>
          <div className="text-gray-700 mt-4">Pool</div>
    </div>  
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiFork size={32} /></div>
          <div className="text-gray-700 mt-4">Restaurant</div>
        
            </div>
        </div>
        <div class="flex flex-row">
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiCctv size={32} /></div>
          <div className="text-gray-700 mt-4">Security</div>
            </div>
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiCar size={32} /></div>
          <div className="text-gray-700 mt-4">Parking</div>
            </div>
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiLeaf size={32} /></div>
          <div className="text-gray-700 mt-4">Garden</div>
            </div>
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiSpa size={32} /></div>
          <div className="text-gray-700 mt-4">Spa</div>
            </div>
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiBusSchool size={32} /></div>
          <div className="text-gray-700 mt-4">School</div>
            </div>
        </div>
        <div class="flex flex-row">
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiBusSchool size={32} /></div>
          <div className="text-gray-700 mt-4">School</div>
            </div>
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiBusSchool size={32} /></div>
          <div className="text-gray-700 mt-4">School</div>
            </div>
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiBusSchool size={32} /></div>
          <div className="text-gray-700 mt-4">School</div>
            </div>
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiBusSchool size={32} /></div>
          <div className="text-gray-700 mt-4">School</div>
            </div>
            <div class="w-1/5 flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full"><BiBusSchool size={32} /></div>
          <div className="text-gray-700 mt-4">School</div>
            </div>
        </div>
    </div>
</div>


 
</div>



  </>

  );
};

export default PropertyDetails ;