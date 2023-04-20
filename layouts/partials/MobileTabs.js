import config from "@config/config.json";
import { ScrollMenu} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { useContext,useState } from 'react';
// import { MyContext } from '../components/MenuContext';
// import { GrFormPrevious,GrFormNext} from "react-icons/gr";
import { LeftArrow, RightArrow } from "./arrow"
import usePreventBodyScroll from "./usePreventBodyScroll";
import { Card } from "./Card";

const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;
const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));


//     const { buttons, filter } = useContext(MyContext);
//     const [selectedItem, setSelectedItem] = useState(0);
// console.log(buttons)
// const menuItems = buttons.map((cat, i) => (
//   <MenuItem
//     key={i}
//     onClick={() => {
//       filter(cat);
//       setSelectedItem(i);
//     }}
//     selected={selectedItem === i}
//     className="btntabs border-none text-default bg-zinc-50 p-2 px-2 mr-5 mt-3 btn"
//   >
//     {cat}
//   </MenuItem>
// ));

//     return (
//       <div className="ltabs mx-[20px] ">
//       <ScrollMenu
//   data={menuItems}
//   arrowLeft={<div className="arrow-prev">{<GrFormPrevious size={20}></GrFormPrevious>}</div>}
//   arrowRight={<div className="arrow-next">{<GrFormNext size={20}></GrFormNext>}</div>}
//   selected={selectedItem}
//   onSelect={setSelectedItem}
//   className="scrollwrapper"
// />
//              </div>
//     );

export default function MobileTabs () {
  const [items] = useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
  
      <div className="example" style={{ paddingTop: "100px" }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            Header={<div>HEADER</div>}
            Footer={<div>FOOTER</div>}
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
     
      </div>
    </>
  );
}


function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
