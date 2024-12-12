import React from "react";
import { imgPath } from "../../../helpers/functions-general";
import {
  ArrowRight,
  ChartBarStacked,
  Clock,
  CookingPot,
  HandPlatter,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useQueryData from "../../../custom-hook/useQueryData";

const BannerSlider = ({ result }) => {
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <section>
      <Slider {...settings}>
        {result?.data.map((item, key) => (
          <div className="w-full h-[calc(100vh-77.5px)] relative " key={key}>
            <img
              src={`${imgPath}/${item.recipe_image}`}
              alt=""
              className="w-full h-[110%] object-cover "
            />

            <div className="tint w-full h-[110%] bg-black bg-opacity-60 absolute top-0 left-0"></div>
            <div className="absolute top-1/2 md:left-[calc((100vw-1200px)/2)] p-4 text-white md:max-w-[500px] -translate-y-1/2">
              <h2 className="text-5xl mb-2">{item.recipe_title}</h2>
              <ul className="flex gap-5 mb-5">
                <li className="flex gap-2 items-center">
                  <Clock /> {item.recipe_prep_time}
                </li>
                <li className="flex gap-2 items-center">
                  <Utensils /> 4 {item.recipe_serving}
                </li>
                <li className="flex gap-2 items-center">
                  <HandPlatter /> {item.category_title}
                </li>
              </ul>

              <p className="mb-5">{item.recipe_description}</p>

              <Link
                to={`/recipe/single/${item.recipe_title.replaceAll(" ", "-")}`}
                className="flex gap-3 items-center group hover:text-accent transition-all font-bold"
              >
                View Full Recipe
                <ArrowRight
                  size={18}
                  className="opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 stroke-accent"
                />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;
