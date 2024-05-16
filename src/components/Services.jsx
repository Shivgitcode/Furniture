import { services } from "../utils";

export default function Services() {
    return (
        <div className="w-full">
            <div className="w-[85%] mx-auto flex flex-col items-center py-[80px]">
                <h2 className="font-bold text-[40px] mb-[16px] ">Our Services</h2>
                <p className="text-center font-normal mb-[50px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ut.</p>
                <div className="flex flex-col items-center gap-14 sm:flex-row">
                    {
                        services.map((service) => (
                            <div className="flex flex-col items-center gap-3">
                                <img src={service.img} alt="" />
                                <h1 className="font-semibold uppercase ">{service.name}</h1>
                                <p className="text-center w-[60%]">{service.desc}</p>
                                <button className="rounded-md bg-0-main text-white py-3 px-4">Read More</button>

                            </div>
                        ))

                    }

                </div>

            </div>

        </div>
    )
}
