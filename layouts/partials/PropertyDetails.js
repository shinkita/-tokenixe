import React from 'react';
import { BiBasketball,BiFork,BiLeaf,BiWine,BiCar,BiCctv,BiDumbbell,BiSwim,BiSpa,BiBusSchool,BiCartAlt} from "react-icons/bi";
const PropertyDetails = () => {
  return (
  <>
  <div class="flex flex-col gap-[20px] px-0 lg:px-[50px] py-[20px] lg:py-[50px]">
    <div class="text-4xl font-bold text-gray-700 text-center py-[20px]">Overview</div>
    <div class="flex flex-col lg:flex-row gap-[50px]">
        <div class="w-full lg:w-1/2 flex flex-col gap-[30px]">
            <div class="text-lg font-bold text-gray-700 text-center lg:text-left">About the Property</div>
            <div class="text-basic text-gray-700 text-center lg:text-left">Here you will find all available information regarding the specific property. For example, this might entail where the property is located, what makes it unique, and why it could interest you. Furthermore, Metropoly provides insights about
                market conditions and why our team believes that the property value will increase in the long term. We evaluate crucial aspects of the property, including the area, surrounding development, service charges, building quality, number of
                amenities, developer, and expected supply.</div>
            <div class="text-basic text-gray-700 text-center lg:text-left">All real estate offered on the Metropoly marketplace must pass a strict screening and selection process to provide users with the best opportunity to earn both rental yield and capital appreciation. In addition, we leverage data from leading
                third - party vendors to ensure that all of our internal research and analysis tools are accurate and reliable in current market conditions.</div>
        </div>
        <div class="w-1/2 lg:flex flex-col gap-[20px] sm: w-full">
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
    <div className="p-4 bg-gray-100 rounded-full"><BiCartAlt size={32} /></div>
 <div className="text-gray-700 mt-4">Store</div>
</div>
<div class="w-1/5 flex flex-col items-center">
<div className="p-4 bg-gray-100 rounded-full"><BiDumbbell size={32} /></div>
          <div className="text-gray-700 mt-4">Gym</div>
</div>
</div>
<div class="flex flex-row">
    <div class="w-1/5 flex flex-col items-center">
    <div className="p-4 bg-gray-100 rounded-full"><BiSwim size={32} /></div>
          <div className="text-gray-700 mt-4">Swimming Pool</div>
</div>
<div class="w-1/5 flex flex-col items-center">
<div className="p-4 bg-gray-100 rounded-full"><BiFork size={32} /></div>
          <div className="text-gray-700 mt-4">Restaurant</div>
</div>
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
</div>
<div class="flex flex-row">
    <div class="w-1/5 flex flex-col items-center">
    <div className="p-4 bg-gray-100 rounded-full"><BiSpa size={32} /></div>
          <div className="text-gray-700 mt-4">Spa</div>
</div>
<div class="w-1/5 flex flex-col items-center">
<div className="p-4 bg-gray-100 rounded-full"><BiBusSchool size={32} /></div>
          <div className="text-gray-700 mt-4">School</div>
</div>
<div class="w-1/5 flex flex-col items-center">
<div className="p-4 bg-gray-100 rounded-full"><BiCartAlt size={32} /></div>
 <div className="text-gray-700 mt-4">Store</div>

</div>
<div class="w-1/5 flex flex-col items-center">
<div className="p-4 bg-gray-100 rounded-full"><BiCartAlt size={32} /></div>
 <div className="text-gray-700 mt-4">Store</div>
</div>
<div class="w-1/5 flex flex-col items-center">
<div className="p-4 bg-gray-100 rounded-full"
><BiWine size={32} /></div>
 <div className="text-gray-700 mt-4">Bar</div>
</div>
</div>
</div>
</div>
</div>

{/* <div class="w-full md:w-1/2">
   

<div class="w-full lg:w-auto flex flex-col gap-[10px] mt-[30px]">
    <div class="text-lg font-bold text-gray-700 text-center lg:text-left">About the Property</div>
    <div class="text-basic text-gray-700 text-center lg:text-justify">
        Here you will find all available information regarding the specific property. For example, this might entail where the property is located, what makes it unique, and why it could interest you. Furthermore, Metropoly provides
        insights about market conditions and why our team believes that the property value will increase in the long term. We evaluate crucial aspects of the property, including the area, surrounding development, service charges, building
        quality, number of amenities, developer, and expected supply.
    </div>
    
</div>

  </div>
  <div class="w-full md:lg:w-auto ">
  <div class="text-lg font-bold text-gray-700 text-center lg:text-left my-[30px]">Features of the Property</div>
  <div className="flex justify-center flex-wrap gap-8">
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiBasketball size={32} /></div>
          <div className="text-gray-700 mt-4">Playground</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiDumbbell size={32} /></div>
          <div className="text-gray-700 mt-4">Gym</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiSwim size={32} /></div>
          <div className="text-gray-700 mt-4">Swimming Pool</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiFork size={32} /></div>
          <div className="text-gray-700 mt-4">Restaurant</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiCctv size={32} /></div>
          <div className="text-gray-700 mt-4">Security</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiCar size={32} /></div>
          <div className="text-gray-700 mt-4">Parking</div>
        </div>
        </div>
        <div className="flex flex-wrap gap-8">
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiCar size={32} /></div>
          <div className="text-gray-700 mt-4">Parking</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiLeaf size={32} /></div>
          <div className="text-gray-700 mt-4">Garden</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiSpa size={32} /></div>
          <div className="text-gray-700 mt-4">Spa</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiBusSchool size={32} /></div>
          <div className="text-gray-700 mt-4">School</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiCartAlt size={32} /></div>
          <div className="text-gray-700 mt-4">Store</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiCartAlt size={32} /></div>
          <div className="text-gray-700 mt-4">Store</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full"><BiCartAlt size={32} /></div>
          <div className="text-gray-700 mt-4">Store</div>
        </div>
      </div>
</div> */}

  </>

  );
};

export default PropertyDetails ;