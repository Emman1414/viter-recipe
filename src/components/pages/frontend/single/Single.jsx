import React from "react";
import Headings from "../Headings";
import Footnote from "../Footnote";
import { imgPath } from "../../../helpers/functions-general";
import { Clock, Dot, HandPlatter, Utensils } from "lucide-react";
import { useParams } from "react-router-dom";
import useQueryData from "../../../custom-hook/useQueryData";
import Markdown from "react-markdown";

const Single = () => {
  const { slug } = useParams();

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/recipe`, // endpoint
    "get", // method
    "recipe"
  );

  const getSingleRecipe = () =>
    result?.data.filter(
      (item) => item.recipe_title === slug.replaceAll("-", " ")
    );

  return (
    <>
      <Headings />
      <section className="bg-dark text-white ">
        <div className="container">
          <div className="py-24">
            <img
              src={`${imgPath}/${
                getSingleRecipe() !== undefined && getSingleRecipe()[0].recipe_image
              }`}
              alt=""
              className="h-[700px] w-full object-cover mb-5"
            />

            <div className="text-center mb-2">
              <h1>
                {getSingleRecipe() !== undefined &&
                  getSingleRecipe()[0].recipe_title}
              </h1>
              <ul className="flex gap-5 mb-5 justify-center">
                <li className="flex gap-2 items-center">
                  <Clock />{" "}
                  {getSingleRecipe() !== undefined &&
                    getSingleRecipe()[0].recipe_prep_time}
                </li>
                <li className="flex gap-2 items-center">
                  <Utensils />{" "}
                  {getSingleRecipe() !== undefined &&
                    getSingleRecipe()[0].recipe_serving}
                </li>
                <li className="flex gap-2 items-center">
                  <HandPlatter />{" "}
                  {getSingleRecipe() !== undefined &&
                    getSingleRecipe()[0].recipe_category}
                </li>
              </ul>
              <p className="max-w-[500px] mx-auto">
                {getSingleRecipe() !== undefined &&
                  getSingleRecipe()[0].recipe_description}
              </p>
              <div className="text-left grid grid-cols-[1.6fr_3fr] gap-10 max-w-[900px] mx-auto mt-10">
                <div>
                  <h4>Ingredients</h4>

                  {getSingleRecipe() !== undefined &&
                    JSON.parse(getSingleRecipe()[0].recipe_ingredients).map(
                      (item, key) => (
                        <div className="flex gap-2" key={key}>
                          <Dot />
                          <ul className="grid grid-cols-[.3fr,_1fr] mb-2 basis-full">
                            <li>
                              <span>{item.amount}</span> {item.unit}
                            </li>
                            <li>{item.ingredients}</li>
                          </ul>
                        </div>
                      )
                    )}
                </div>
                <div className="wrapper-instruction">
                  <h5>Instructions</h5>
                  <Markdown>
                    {getSingleRecipe() !== undefined &&
                      getSingleRecipe()[0].recipe_instruction}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footnote />
    </>
  );
};

export default Single;
