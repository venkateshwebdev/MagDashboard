"use client";
import Image from "next/image";
import { useState } from "react";
import {BiMenu,BiSolidHome} from "react-icons/bi"
import {FaUserEdit} from "react-icons/fa"
import {IoLogOut,IoCloseSharp} from "react-icons/io5"
export default function Sidebar(){
    const [menu,setMenu] = useState(true)
    const handleClick = ()=>{
        setMenu(prev=>!prev);
        console.log("clicked");
    }
    return(
        <main className={`h-[100vh] w-[100px] bg-[#ADD2B5] flex flex-col justify-between items-center py-5  ${menu&&"w-[200px]"}`} >

            {/* ////SideBar Top */}
            <section className="flex flex-col items-center">
                <Image src="/img/NewMagnimusLogo.svg" alt="Magnimus_Logo" height={50} width={50}/> 
                {menu&&<span className="text-base font-semibold pt-2">Magnimus</span>}
                <div className="py-20 flex flex-col gap-10 text-2xl">
                    <div className="flex gap-2 cursor-pointer z-999" onClick={handleClick}>Cl</div> 
                    <div className="flex gap-2"><BiSolidHome />{menu&&<span className="text-base">Home</span>}</div>
                    <div className="flex gap-2"><FaUserEdit />{menu&&<span className="text-base">Edit Profile</span>}</div>
                </div>
            </section>

            {/* ////Sidebar Bottom */}
            <section className="">
            <div className="flex flex-col gap-10 text-2xl">
            <div className="flex gap-2"><IoLogOut />{menu&&<span className="text-base">Logout</span>}</div>
                </div>
            </section>
        </main>
    )
}