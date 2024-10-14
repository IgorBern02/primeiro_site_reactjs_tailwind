import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Stars from "./stars/stars";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function CustomPrevArrow({ onClick }) {
    return (
      <button
        className="p-2 text-2xl rounded-full shadow shadow-black"
        onClick={onClick}
      >
        <FaAngleLeft />
      </button>
    );
  }

  function CustomNextArrow({ onClick }) {
    return (
      <button
        className="p-2 text-2xl rounded-full shadow shadow-black"
        onClick={onClick}
      >
        <FaAngleRight />
      </button>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const slides = [
    {
      user: "User",
      prof: "Executivo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestias dignissimos?",
      feed: "5 estrelas",
    },
    {
      user: "User-2",
      prof: "Executivo-2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestias dignissimos?",
      feed: "3 estrelas",
    },
    {
      user: "User-3",
      prof: "Executivo-3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestias dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestias dignissimos?",
      feed: "2 estrelas",
    },
    {
      user: "User-4",
      prof: "Executivo-4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestias dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestias dignissimos?",
      feed: "1 estrelas",
    },
    {
      user: "User-5",
      prof: "Executivo-5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestias dignissimos?",
      feed: "5 estrelas",
    },
    {
      user: "User-6",
      prof: "Executivo-6",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestias dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestias dignissimos?",
      feed: "4 estrelas",
    },
  ];

  return (
    <div className=" relative top-[600px]  p-12 gap-10 flex flex-col items-center justify-center w-full h-screen">
      <section className=" flex flex-col items-center justify-center gap-2 p-2">
        <h2 className="text-3xl font-semibold">
          O que o <span className="text-orange-500">cliente</span> diz!
        </h2>
        <p className="text-slate-500 text-base w-2/4 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias cumque
          suscipit officia corrupti incidunt cum, corporis dolore minima!
          Ducimus nesciunt neque necessitatibus beatae odio eaque aperiam
          doloremque reprehenderit dolorem sequi?
        </p>
      </section>
      <div className=" w-full p-5 ">
        <Slider
          {...settings}
          className=" flex items-center justify-center w-[1200px]  min-h-96"
        >
          {slides.map((slide, index) => (
            <div key={index} className="m-4">
              <section className=" bg-white shadow shadow-black w-11/12 rounded-lg p-2 h-full flex flex-col items-center justify-center gap-3 ">
                <section className="w-full flex items-center ">
                  <figure className="bg-slate-200 rounded-full p-3">
                    {<FaRegUser />}
                  </figure>

                  <section className=" w-full ml-3 text-left">
                    <h1 className="text-sm text-orange-600 font-semibold">
                      {slide.user}
                    </h1>
                    <p className="text-xs">{slide.prof}</p>
                  </section>
                </section>
                <p className="text-left text-slate-500  max-h-full text-sm">
                  {slide.desc}
                </p>
                <p className="w-full text-left">
                  <Stars />
                </p>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
