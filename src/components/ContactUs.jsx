import { img3, rectangle } from "../assets";

export default function ContactUs() {
    return (
        <div className="w-full relative">
            <div className="absolute w-full h-full">
                <img src={rectangle} alt="" className="w-full h-full object-cover" />
            </div>
            <div className=" relative z-[1] w-[85%] mx-auto py-[80px] flex flex-col items-center h-[550px] ">
                <h2 className="font-bold text-[40px] text-white mb-[16px] w-full sm:text-start">Contact Us</h2>
                <div className="flex flex-row sm:w-full justify-between">
                    <form className="flex flex-col justify-between w-full h-full items-center gap-4 sm:w-fit sm:justify-between sm:items-start">
                        <input type="text" placeholder="Name" className="w-full px-3 rounded-md py-3 focus:outline-none" />
                        <input type="text" placeholder="Email" className="w-full px-3 rounded-md py-3 focus:outline-none" />
                        <input type="text" placeholder="Phone Number" className="w-full px-3 rounded-md py-3 focus:outline-none" />
                        <textarea cols={10} type="text" placeholder="Message" className="w-full px-3 rounded-md py-3 focus:outline-none" />


                    </form>

                    <div className="hidden sm:block">
                        <img src={img3} alt="" className=" h-full object-cover" />
                    </div>

                </div>
                <button className="border-[2px] rounded-md w-fit font-bold px-4 py-1 text-white sm:self-start">Send</button>


            </div>
        </div>
    )
}
