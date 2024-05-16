import { kitchen, shape } from "../assets";
import { footer } from "../utils";

export default function OtherDetails() {
    return (
        <div className="w-full relative">
            <div className="w-full h-full absolute overflow-x-hidden">
                <img src={kitchen} alt="" className="min-w-[1200px] h-full object-cover object-bottom" />
            </div>
            <div className="w-full h-full absolute z-[1] opacity-95">
                <img src={shape} alt="" className="w-full h-full object-cover" />
            </div>
            <div className=" w-[85%] mx-auto relative z-[2] py-[80px] flex flex-col items-center gap-[5rem] sm:flex-row sm:items-start">
                {
                    footer.map(el => (
                        <div className="flex flex-col items-center sm:items-start">
                            <h2 className={`${el.id == 1 && "font-bold"} text-[40px] text-center sm:text-start mb-[16px] text-white uppercase`}>{el.name}</h2>
                            <p className="text-center w-[70%] text-[20px] text-white sm:text-start">{el.desc}</p>
                        </div>

                    ))

                }

            </div>
        </div>
    )
}
