import { kitchen, tap } from "../assets";

export default function OurFurnitures() {
    return (
        <div className="w-full">
            <div className="w-[85%] mx-auto py-[80px] flex flex-col items-center">
                <h1 className=" uppercase font-bold text-[40px] mb-2">Our Furnitures</h1>
                <p className=" mb-8  text-center">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                <div className="flex flex-col items-center gap-10 mt-4">
                    <div className="flex flex-col items-center gap-2">
                        <img src={kitchen} alt="" />
                        <h3 className="text-center text-0-main font-medium text-[18px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias.</h3>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime maiores dignissimos temporibus illum obcaecati soluta.</p>

                    </div>
                    <div>
                        <img src={tap} alt="" />
                        <h3 className="text-center text-0-main font-medium text-[18px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias.</h3>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime maiores dignissimos temporibus illum obcaecati soluta.</p>

                    </div>
                </div>

            </div>
        </div>
    )
}
