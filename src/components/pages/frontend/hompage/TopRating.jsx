import React from "react";
import { imgPath } from "../../../helpers/functions-general";
import { Link } from "react-router-dom";
import useQueryData from "../../../custom-hook/useQueryData";

const TopRating = () => {
  const {
    isFetching,
    error,
    status,
    data: result,
  } = useQueryData(
    `/v2/recipe`, // endpoint
    "get", // method
    "recipe" // key
  );

  return (
    <section className="py-24 bg-dark">
      <div className="container">
        <h2 className="text-white ">Top Rating</h2>

        <div className="grid grid-container-top gap-3">
          {result?.count > 0 &&
            result.data.map((item, key) => (
              <div
                className={`grid-item relative h-full w-full bg-black group grid-name-top-${key} overflow-hidden`}
                key={key}
              >
                <img
                  src={`${imgPath}/${item.recipe_image}`}
                  alt=""
                  className="group-hover:opacity-70 transition-all h-full object-cover group-hover:scale-[1.5] group-hover:rotate-[10deg] object-cover"
                />
                <div className="absolute -bottom-24 left-5 text-white opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all">
                  <ul className="text-sm flex gap-4 items-center">
                    <li>{item.recipe_prep_time}</li>
                    <li>{item.recipe_serving}</li>
                  </ul>
                  <h4 className="mb-2 font-light">{item.recipe_title}</h4>
                  <Link to="/" className="font-bold">
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopRating;
