import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";
const Listing = () => {            
  
return (
<>
  {config.listingdata.map((Val) => {
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
            {Val.location} </p>
           <div className="card-text">{Val.desc}</div>
           <p className="text-default flex line-clamp-3">
           <Image src="/images/bed.svg"
                    alt="icon"
                    width={15}
                    height={15}/> &nbsp;&nbsp;
            {Val.bhk} </p>
           <p className="card-text font-bold detailtext pt-1 pb-1">Dividend <span className="text-primary">{Val.DividendPercentage}</span> Starts from <span className="text-primary"> {Val.reats}</span> Reats </p>
           <p className="card-text font-bold detailtext pb-1">Dividends  <span className="text-primary font-normal">{Val.scheme}</span> </p>
          <div className="flex">
            <span className="font-bold text-grayshade">Total Supply : </span><span className="text-primary font-bold">{Val.totalSupply}</span>
            <span> <Link className="btn bg-primary  text-white z-0 py-[2px] btnInvest ml-2" href="#" rel="">
              Invest Now
            </Link> </span>
           </div>
         </div>
       </div>
     );
   })}


</>
);
};

export default Listing;