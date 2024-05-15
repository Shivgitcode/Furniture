import { mainicon } from "../assets";
import { RxTextAlignJustify } from "react-icons/rx";

export default function Navbar() {
    return (
        <div className=" py-[30px] w-full relative z-[1]">
            <nav className="flex w-[85%] justify-between mx-auto">
                <div className="flex justify-center items-center">
                    <img src={mainicon} alt="" className=" mr-2 w-[50px]" />
                    <p className=" font-bold uppercase ">built better</p>

                </div>

                <div>
                    <RxTextAlignJustify fontSize={40}></RxTextAlignJustify>

                </div>

            </nav>

        </div>
    )
}
