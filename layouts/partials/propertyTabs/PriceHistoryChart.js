import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
const PriceHistoryChart = () => {
    return (
      <>
         <div className="flex flex-col gap-[10px]">
    <div className="text-4xl font-bold text-default text-center pb-[30px]">Price History</div>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-primary font-bold">
            <ListOutlinedIcon />  Listing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="flex flex-col gap-[20px]">
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">Price</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">Ethereum</div>
        <div className="hidden lg:flex w-1/5 text-sm font-bold text-gray-700">Floor Difference</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">Expiration</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">From</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.88 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">1.9 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 4 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">SuperNova</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.78 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">3.8 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 8 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">MikelovesNFT</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.72 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">5.7 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 9 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">June24x</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.55 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">7.7 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 10 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">KevinCranel</div>
    </div>
</div>


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  className="text-primary font-bold">
           <LocalOfferOutlinedIcon  /> Offers
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          <div className="flex flex-col gap-[20px]">
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">Price</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">Ethereum</div>
        <div className="hidden lg:flex w-1/5 text-sm font-bold text-gray-700">Floor Difference</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">Expiration</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-gray-700">From</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.88 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">1.9 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 4 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">SuperNova</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.78 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">3.8 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 8 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">MikelovesNFT</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.72 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">5.7 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 9 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">June24x</div>
    </div>
    <div className="flex flex-row items-center mx-[10px]">
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">$ 5200</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">2.55 ETH</div>
        <div className="hidden lg:flex w-1/5 text-sm text-gray-700">7.7 % bello</div>
        <div className="w-1/4 lg:w-1/5 text-sm text-gray-700">about 10 hours</div>
        <div className="w-1/4 lg:w-1/5 text-sm font-bold text-[#377eff]">KevinCranel</div>
    </div>
</div>


          </Typography>
        </AccordionDetails>
      </Accordion>
   </div>
      </>
    )
   
}
 
  export default PriceHistoryChart;