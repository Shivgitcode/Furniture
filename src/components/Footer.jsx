import { socialMedia } from "../utils";

export default function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-5 py-[30px]">
            <div className="flex justify-center items-center gap-3">
                {
                    socialMedia.map(el => (
                        <div>
                            <img src={el.img} alt="" />
                        </div>
                    ))
                }

            </div>

            <p className="font-medium">©️ 2020 All Rights Reserved Design by Shweta</p>



        </div>
    )
}
