import { mainicon } from "../assets";
import { RxTextAlignJustify } from "react-icons/rx";
import { navbar } from "../utils";
import { useState } from "react";

export default function Navbar() {
    const [show, setShow] = useState(true)
    return (
        <div className=" py-[30px] w-full relative z-[10]">
            <nav className="flex w-[85%] justify-between mx-auto">
                <div className="flex justify-center items-center">
                    <img src={mainicon} alt="" className=" mr-2 w-[50px]" />
                    <p className=" font-bold uppercase ">built better</p>

                </div>

                <div onClick={() => setShow(!show)} className="cursor-pointer">
                    <RxTextAlignJustify fontSize={40}></RxTextAlignJustify>

                </div>

            </nav>

            {/* dropdown */}

            <ul className={`absolute right-9 mt-2 bg-white rounded-md p-5 ${show && "opacity-0 -translate-y-6"} transition-all duration-150`}>
                {navbar.map(link => (
                    <li className={`${link.id === 6 && "hidden"} font-medium cursor-pointer`}>{link.link}</li>
                ))}


            </ul>

        </div>
    )
}
