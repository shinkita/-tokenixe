import React, { useContext, useState, useRef } from 'react';
import { MyContext} from '../components/MenuContext';
import { GrFormPrevious,GrFormNext} from "react-icons/gr";
const MobileTest = () => {
    const {buttons,filter} =useContext(MyContext)
    const sliderRef = useRef(null);

    const slideLeft = () => {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    };
    
    const slideRight = () => {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    };
    

    return (
      <div className="ltabs mx-[20px] ">
        <div className='relative flex items-center'>
          <GrFormPrevious className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
          <div ref={sliderRef} className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-[12px]'>
            {buttons.map((cat, i) => {
              return (
                <button onClick={() => filter(cat)} className="btntabs active border-none text-default bg-zinc-50 p-2 px-2 mr-5 btn" key={i}>
                  {cat}
                </button>
              );
            })}
          </div>
          <GrFormNext className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
      </div>
    );
        }
  
  export default MobileTest