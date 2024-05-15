import { rectangle } from "../assets";

export default function WhoWeAre() {
    return (
        <div className="w-full relative flex items-center justify-center mt-[200px]">
            <div className="absolute w-full h-[600px]">
                <img src={rectangle} alt="" className="w-full object-cover h-full" />
            </div>

            <div className="relative z-[1] w-[85%] mx-auto flex flex-col items-center ">
                <h2 className="font-bold text-[40px] text-white mb-[8px]">Who we Are?</h2>
                <h3 className=" text-white text-[20px] font-medium mb-[16px]">Designers & Innovators</h3>
                <p className="text-white text-center mb-[20px] w-[60%] leading-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, accusantium veniam asperiores omnis odit maxime fuga harum impedit vel molestiae!</p>
                <button className=" bg-white font-medium text-[18px] rounded-md px-4 py-3">Get A Quote</button>

            </div>
        </div>
    )
}
