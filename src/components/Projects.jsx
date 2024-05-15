import { semicol } from "../assets";
import { projects, reviews } from "../utils";

export default function Projects() {
    return (
        <div className="w-full overflow-x-hidden">
            <div className="w-[85%] mx-auto flex flex-col items-center gap-4  ">
                <h2 className="font-bold text-[40px]">Our Projects</h2>
                <h3 className="text-center text-[20px] mb-[16px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <div className="flex flex-col gap-5">
                    {projects.map((project) => (
                        <div className="relative w-[400px] h-[300px]">
                            <img src={project.img} alt="" className="absolute w-full h-full object-cover" />
                            <h3 className="relative z-[10] top-[230px] left-[27%] text-white font-medium text-[18px] ">{project.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-[85%] mx-auto flex flex-col items-center gap-4 pt-[180px]">
                <h2 className="uppercase font-bold text-[40px] text-center ">What is says our clients</h2>
                <h3 className="text-[20px] text-center mb-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className="w-full h-[500px] flex flex-col justify-between ">
                    {reviews.map(review => (
                        <div className="flex items-center justify-between w-full gap-4 border-[1px] p-8">
                            <div className="relative w-[400px] h-full">
                                <img src={review.img} alt="" className="w-full h-full object-cover" />
                                <img src={semicol} alt="" className="absolute right-10 -bottom-2" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold uppercase ">{review.name}</h4>
                                <p>{review.desc}</p>

                            </div>
                        </div>

                    ))}

                </div>



            </div>
        </div>
    )
}
