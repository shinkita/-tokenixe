import config from "@config/config.json";
import Image from "next/image";
const Listing = ({menuItem}) => {            
  
return (
<>

 {menuItem.map((Val) => {
     return (
       <div
         className="col-12 mb-8 sm:col-6 lg:col-4 py-4 px-4 border-0"
         key={Val.id}
       >
         <div className="card-img-top text-center border-emerald-200">
           <Image src={Val.ListingImage} 
           alt={Val.title} 
           className="photo" 
           width={500}
           height={500}
                    />
                  
                  <span className="type">  {Val.listing_type}</span>
                     {/* <span className="type font-semibold border-2 border-solid border-blue-500">  {Val.listing_type}</span> */}
                    {/* <span className="typeoffering font-semibold flex items-center border-2 border-solid border-blue-500">Offering Type: {Val.OfferingType}&nbsp;  &nbsp; 
                    <Image src="/images/coin1.svg"
                    alt="icon"
                    width={15}
                    height={15}/>
                    </span> */}
                     <span className="typeoffering flex items-center">Offering Type: {Val.OfferingType}&nbsp;  &nbsp; 
                    <Image src="/images/coin1.svg"
                    alt="icon"
                    width={15}
                    height={15}/>
                    </span>
                    <span className="timer flex items-center "><Image src="/images/TimeMachine.svg"
                    alt="icon"
                    width={14}
                    height={14}/>&nbsp; {Val.days}</span>
                     {/* <span className="timer flex items-center border-2 border-solid border-blue-500"><Image src="/images/TimeMachine.svg"
                    alt="icon"
                    width={14}
                    height={14}/>{Val.days}</span> */}
         </div>

          
         <div className="card-body listDetails  pt-3">
         <div  className="my-4">  
         <span className="bg-blue-500 rounded-r-[15px] py-2 px-1"><span className="text-white font-medium py-2 pl-[7px]">5000 REATs</span> <span className="font-bold text-white py-2"> &nbsp;total supply  &nbsp; </span></span> 

            {/* <span> <Link className=" text-default z-0 py-[4px] btnInvest ml-2 " href="#" rel="">
             <BsHeart></BsHeart>{Val.btntext}
            </Link> </span> */}
            {/* <button class="text-default py-2 px-4 rounded  border-gray-200 btnInvest">
            <span className="hover:fill-gray-300">
              <Image src={Val.icon}
                    alt="icon"
                    width={14}
                    height={14}/></span>&nbsp; <span>{Val.btntext} </span> 
</button> */}
        

           </div>
           <h5 className="card-title text-default pt-4 pb-3 px-4 ">
             {Val.title} 
            
           </h5>
           <div className="text-default flex px-4 pt-2">
           <Image src="/images/location.svg"
                    alt="icon"
                    width={10}
                    height={10}/> &nbsp;&nbsp;
            {Val.location} </div>
           <div className="card-text pt-0 px-4">{Val.desc}</div>
          
           <div className="text-primary flex px-4 pt-2 pb-6">
           <Image src="/images/bed.svg"
                    alt="icon"
                    width={15}
                    height={15}/> &nbsp;&nbsp;
            {Val.bhk} </div>
            
         
           <div className="py-[10px] flex justify-around border-t border-solid border-gray-200">
           <div><small>Dividend</small>
           <br/>
           <span className="text-primary  font-bold"> &nbsp;{Val.DividendPercentage}</span>
           </div>
           <div>
            <div className="flex">
           <span><small> Starts from</small> </span><span><Image src="/images/Tether.svg"
                    alt="icon"
                      width={25}
                    height={25}/></span>
                    </div>
                  
                    <span className="text-primary font-bold"> {Val.reats}</span> &nbsp;Reats 
           </div>
           <div><small>Dividends</small>
           <br/>
          
           <span className="text-primary font-bold">{Val.scheme}</span>
           </div>
           </div>
           <div className="m-4">
           <button className="text-default rounded  bg-blue-100 flex  items-center justify-center w-full p-4 hover:bg-blue-300">
            <span className="hover:fill-gray-300">
              <Image src={Val.icon}
                    alt="icon"
                    width={14}
                    height={14}/></span>&nbsp; <span>{Val.btntext} </span> 
</button>
           </div>
                 
         </div>
       </div>
     );
   })} 

  {/* {config.listingdata.map((Val) => {
     return (
       <div
         className="col-12 mb-8 sm:col-6 lg:col-4 py-3 border-0"
         key={Val.id}
       >
         <div className="card-img-top text-center border-emerald-200">
           <Image src={Val.ListingImage} 
           alt={Val.title} 
           className="photo" 
           width={500}
           height={500}
                    />
                  
                     <span className="type font-semibold">  {Val.listing_type}</span>
                    <span className="typeoffering font-semibold">Offering Type: {Val.OfferingType}&nbsp;  &nbsp; 
                    <Image src={Val.typeOfferingIcon}
                    alt="icon"
                    width={20}
                    height={20}/>
                    </span>
                    <span className="timer"> {Val.days}</span>
         </div>
         <div className="card-body listDetails">
           <h6 className="card-title text-default line-clamp-3 pt-1 pb-2">
             {Val.title} 
            
           </h6>
           <p className="text-default flex line-clamp-3">
           <Image src="/images/vector.svg"
                    alt="icon"
                    width={10}
                    height={10}/> &nbsp;&nbsp;
            {Val.location} </div>
           <div className="card-text">{Val.desc}</div>
           <p className="text-default flex line-clamp-3">
           <Image src="/images/bed.svg"
                    alt="icon"
                    width={15}
                    height={15}/> &nbsp;&nbsp;
            {Val.bhk} </div>
           <p className="card-text font-bold detailtext pt-1 pb-1">Dividend <span className="text-primary">{Val.DividendPercentage}</span> Starts from <span className="text-primary"> {Val.reats}</span> Reats </div>
           <p className="card-text font-bold detailtext pb-1">Dividends  <span className="text-primary font-normal">{Val.scheme}</span> </div>
          <div className="flex">
            <span className="font-bold text-grayshade">Total Supply : </span><span className="text-primary font-bold">{Val.totalSupply}</span>
            <span> <Link className="btn bg-primary  text-white z-0 py-[2px] btnInvest ml-2" href="#" rel="">
              Invest Now
            </Link> </span>
           </div>
         </div>
       </div>
     );
   })} */}


</>
);
};

export default Listing;