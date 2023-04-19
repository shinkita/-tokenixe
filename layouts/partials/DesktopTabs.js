import { useContext } from 'react';
import { MyContext } from '../components/MenuContext';
const DestopTabs=()=>{
    const {buttons,filter} =useContext(MyContext)
    return(
        <>
       <div className="ltabs mx-[20px]">
      {buttons.map((cat, i) => {
        return (
       
          <button onClick={() => filter(cat)} className="btntabs active border-none text-default bg-zinc-50 p-2 px-2 mr-5 btn" key={i}>
            {cat}
          </button>
          
        );
      })}
    </div> 

        </>
    )
}
export default DestopTabs