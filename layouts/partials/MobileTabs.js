import config from "@config/config.json";
import { useContext,useState } from 'react';
import { MyContext } from '../components/MenuContext';
import ScrollMenu from 'react-horizontal-scroll-menu';
import { GrFormPrevious,GrFormNext} from "react-icons/gr";
const MobileTabs = () => {
    const { buttons, filter } = useContext(MyContext);
    const [selectedItem, setSelectedItem] = useState(0);
  
    const menuItems = buttons.map((cat, i) => (
      <button
        onClick={() => {
          filter(cat);
          setSelectedItem(i);
        }}
        className={`btntabs ${selectedItem === i ? 'active' : ''} border-none text-default bg-zinc-50 p-2 px-2 mr-5 mt-3 btn`}
        key={i}
      >
        {cat}
      </button>
    ));
  
    return (
      <div className="ltabs mx-[20px] ">
        <ScrollMenu
          data={menuItems}
          arrowLeft={<div className="arrow-prev">{<GrFormPrevious size={20}></GrFormPrevious>}</div>}
          arrowRight={<div className="arrow-next">{<GrFormNext size={20}></GrFormNext>}</div>}
          selected={selectedItem}
          onSelect={setSelectedItem}
          className="scrollwrapper"
        />
      </div>
    );
  };
  
  export default MobileTabs;
  