import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { kitchen, tap } from "../assets";

export default function Slide() {
    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="flex">
            <Slider {...settings}>
                <div>
                    <img src={kitchen} alt="" />
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime maiores dignissimos temporibus illum obcaecati soluta.</p>

                </div>


                <div>
                    <img src={tap} alt="" />
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime maiores dignissimos temporibus illum obcaecati soluta.</p>

                </div>

            </Slider>

        </div>
    )
}

