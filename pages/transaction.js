import config from "@config/config.json";
import { IconName } from "react-icons/ri";
import Link from "next/link";
import Header from "@partials/Header"
import Footer from "@partials/Footer"
const {investLabel, link } = config.nav_button;
import React, { useState,useEffect } from "react";
import Posts from "../layouts/partials/Posts"

const transaction=()=>{
return(
    <>
    <Header/>
<main></main>
    <section className="section mt-[100px]">
       
       <div className="container">

        <h3 className="text-center">You have not made any transactions yet.</h3>
        <div className="flex ml-auto  min-w-[200px] items-center justify-center  mt-2 md:mt-2 md:flex md:order-2 px-[40px]">
            <Link className="btn btn-primary z-0 py-[10px] mt-3" href="/blogs" invest rel="">
             Browse Properties
            </Link>
          </div>
       </div>


          </section>

    <Footer/>

    </>
)

}
export default transaction