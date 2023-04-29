import Header from "@layouts/partials/Header"
import Footer from "@layouts/partials/Footer"
import PropertyCard from "@layouts/partials/Propertycard"
import PropertyDetails from "@layouts/partials/PropertyDetails"
import PropertyTabs from "@layouts/partials/PropertyTabs"
import config from "@config/config.json";

const viewProperty=()=>{
    return(
<>
<Header/>
<main className="mt-[140px]">

<div className="flex flex-wrap">
  <div className="w-full  md:w-1/2 px-4">
  <div className="relative w-full lg:w-auto h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
    <img className="h-full"
     src="https://sage-malasada-060e9f.netlify.app/house-1.png" alt=""
     width="100%"
     />
   
   </div>
  </div>
  <div className="w-full md:w-1/2 px-4">
    <PropertyCard/>
  </div>
</div>
<div class="flex flex-wrap px-1 box-border">
<PropertyDetails/>

<PropertyTabs  tabs={config.PropertyTabs}/>

{/*--Location--*/}
<div className="w-full">
<div className="flex flex-col px-0 py-[20px] ">
    <div className="text-4xl font-bold text-gray-700 text-center py-[20px] ">Location</div>
    <img className="w-full object-cover pt-4" src="https://sage-malasada-060e9f.netlify.app/map_01.png" alt=""/></div>
</div>
{/*--Location--*/}
{/*--developer Details--*/}
<div className="w-full md:lg:w-auto">
<div className="flex flex-col gap-[20px]  py-[30px] px-2">
    <div className="text-4xl font-bold text-gray-700 text-center py-[20px] lg:py-[30px]">Developer &amp; Property Manager</div>
    <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px]">
        <div className="w-full lg:w-1/2 flex flex-col gap-[10px] lg:gap-[20px]">
            <div className="text-2xl text-gray-700 text-center">
                <div className="titleBox flex justify-center items-center">
                <img src="images/user.jpeg"
                 alt="user"
                 className="rounded-full"
                  width="40px"
                  height="40px"
                 /> &nbsp;
            Titan
                </div>
                </div>
            <div class="text-lg font-bold text-gray-700 text-center">Developer: Titan Real Estate Corp</div>
            <div class="text-lg text-gray-500 text-center">This company is fictitious and for illustrative purposes only. Titan is a multinational real estate development company based in London, UK. The company operates internationally and provides real estate development and management services.</div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-[10px] lg:gap-[20px]">
            <div class="text-2xl text-gray-700 text-center">
            <div className="titleBox flex justify-center items-center">
                <img src="images/user.jpeg"
                 alt="user"
                 className="rounded-full"
                  width="40px"
                  height="40px"
                 /> &nbsp;
             Bed &amp; Chill
                </div>
               </div>
            <div className="text-lg font-bold text-gray-700 text-center">Property Manager: Ben &amp; Chill</div>
            <div className="text-lg text-gray-500 text-center">This company is fictitious and for illustrative purposes only. Founded in 2012, Bed &amp; Chill specializes in full-service property management services. The company’s mission is to help landlords save time and turn their house or apartment
                into a profitable revenue stream.</div>
        </div>
    </div>
</div>
</div>
  {/*--developer Details--*/}

</div>
</main>
<Footer/>

</>
    )

}
export default viewProperty