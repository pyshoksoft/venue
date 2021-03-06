import React from "react";
import Slider from "react-slick";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        responsive: [
            // {
            //   breakpoint: 1024,
            //   settings: {
            // 	slidesToShow: 1,
            // 	slidesToScroll: 1,
            // 	infinite: true,
            // 	dots: false
            //   }
            // },
            // {
            //   breakpoint: 600,
            //   settings: {
            // 	slidesToShow: 1,
            // 	slidesToScroll: 1,
            // 	initialSlide: 1
            //   }
            // },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide1})`,
                            height: `${window.innerHeight}px`
                        }}
                    />
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide2})`,
                            height: `${window.innerHeight}px`
                        }}
                    />
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide3})`,
                            height: `${window.innerHeight}px`
                        }}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;
