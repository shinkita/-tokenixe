import Header from "@layouts/partials/Header"
import Footer from "@layouts/partials/Footer"
import PropertyCard from "@layouts/partials/Propertycard"
import PropertyDetails from "@layouts/partials/PropertyDetails"
import PropertyTabs from "@layouts/partials/PropertyTabs"
import ImageGallery from "@layouts/partials/ImageGallery"
import config from "@config/config.json";
import Image from "next/image"

const viewProperty=(gallery)=>{
    return(
<>
<Header/>
<main className="sm:mt-[120px] md:mt-[140px]">

<div className="flex flex-wrap">
  <div className="w-full  md:w-1/2 px-4">
  <div className="relative w-full lg:w-auto h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
    <ImageGallery  images={gallery.images} />
   
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

<div className="flex flex-col px-0 py-[10px] w-full">
    <div className="text-4xl font-bold text-gray-700 text-center pb-[20px]">Location</div>
    <img className="w-full object-cover pt-4" src="https://sage-malasada-060e9f.netlify.app/map_01.png" alt=""/>
    </div>

{/*--Location--*/}
{/*--developer Details--*/}
<div className="section w-full md:lg:w-auto">
<div className="flex flex-col gap-[20px]  px-2">
    <div className="text-4xl font-bold text-gray-700 text-center pb-[20px]">Developer &amp; Property Manager</div>
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
            Lorem 
                </div>
                </div>
            <div class="text-lg font-bold text-gray-700 text-center">Developer: Lorem ipsum</div>
            <div class="text-lg text-gray-500 text-center">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </div>
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
           John &amp; Doe
                </div>
               </div>
            <div className="text-lg font-bold text-gray-700 text-center">Property Manager: Loream &amp; aset</div>
            <div className="text-lg text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
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