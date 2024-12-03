import React from "react";
import Headings from "../Headings";
import Footnote from "../Footnote";
import { imgPath } from "../../../helpers/functions-general";
import { Clock, Dot, HandPlatter, Utensils } from "lucide-react";

const Single = () => {
  return (
    <>
      <Headings />
      <section className="bg-dark text-white ">
        <div className="container">
          <div className="py-24">
            <img
              src={`${imgPath}/chicken.jpg`}
              alt=""
              className="h-[700px] w-full object-cover mb-5"
            />

            <div className="text-center mb-2">
              <h1>Roasted Chicken</h1>
              <ul className="flex gap-5 mb-5 justify-center">
                <li className="flex gap-2 items-center">
                  <Clock /> 30 mins
                </li>
                <li className="flex gap-2 items-center">
                  <Utensils /> 4 servings
                </li>
                <li className="flex gap-2 items-center">
                  <HandPlatter /> Chicken
                </li>
              </ul>
              <p className="max-w-[500px] mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti optio in cupiditate vitae necessitatibus eaque vel
                explicabo libero excepturi at.
              </p>
              <div className="text-left grid grid-cols-[1.5fr_3fr] gap-10 max-w-[900px] mx-auto mt-10">
                <div>
                  <h4>Ingredients</h4>
                  {Array.from(Array(10).keys()).map((key) => (
                    <div className="flex gap-2">
                      <Dot />
                      <ul
                        className="grid grid-cols-[.3fr,_1fr] mb-2 basis-full"
                        key={key}
                      >
                        <li>
                          <span>1</span> Cup
                        </li>
                        <li>Sugar</li>
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="wrapper-instruction">
                  <h5>Instructions</h5>
                  <h5>Step 1</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>Step 2</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae sed saepe ipsam cumque beatae neque?
                  </p>
                  <h5>Step 3</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae sed saepe ipsam cumque beatae neque?
                  </p>
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
