import { mainicon } from "../assets";
import { RxTextAlignJustify } from "react-icons/rx";
import { navbar } from "../utils";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
    const [show, setShow] = useState(true)
    return (
        <div className=" py-[30px] w-full relative z-[10]">
            <nav className="flex w-[85%] justify-between mx-auto">
                <div className="flex justify-center items-center">
                    <img src={mainicon} alt="" className=" mr-2 w-[50px]" />
                    <p className=" font-bold uppercase whitespace-nowrap sm:text-[28px] ml-3">built better</p>

                </div>

                <ul className="hidden sm:flex w-full justify-around items-center mx-32  ">
                    {navbar.map(link => (
                        <li className={`${link.id === 7 && "hidden"} ${link.id === 6 && "hidden"}  font-[500] uppercase text-[17px]`}>{link.link}</li>
                    ))}
                </ul>

                <div onClick={() => setShow(!show)} className="cursor-pointer flex justify-center items-center ">
                    <span className="hidden sm:inline text-[17px] uppercase font-[500] whitespace-nowrap mr-5 text-0-main">Call Us: +01 1234567890</span>
                    <RxTextAlignJustify fontSize={40} className="sm:hidden"></RxTextAlignJustify>
                    <IoSearchOutline fontSize={20} className="hidden sm:block"></IoSearchOutline>
                    <span className="ml-10 hidden sm:inline text-[17px] uppercase font-[500] ">login</span>


                </div>

            </nav>

            {/* dropdown */}

            <ul className={`absolute right-9 mt-2 sm:hidden  bg-white rounded-md p-5 ${show && "opacity-0 -translate-y-6"} transition-all duration-150`}>
                {navbar.map(link => (
                    <li className={`${link.id === 6 && "hidden"} font-medium cursor-pointer mb-2`}>{link.link}</li>
                ))}


            </ul>

            {/* nav */}


        </div>
    )
}
