import { cradle } from "../assets";

export default function AboutUs() {
    return (
        <div className="w-full bg-0-main py-[80px]">
            <div className="w-[85%] mx-auto flex flex-col items-center sm:flex-row-reverse sm:justify-center">
                <img src={cradle} alt="" className=" mb-12 " />
                <div className="flex flex-col items-center gap-5 sm:items-start sm:max-w-[50%] ">
                    <h2 className=" font-bold text-white text-[40px]">About Us</h2>
                    <p className="text-center text-white w-[70%] sm:text-start sm:w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum dolorem sunt accusantium eos repellat, beatae quas assumenda molestiae harum.</p>
                    <button className=" rounded-md bg-black text-white px-4 py-3">Read More</button>
                </div>
            </div>
        </div>
    )
}
