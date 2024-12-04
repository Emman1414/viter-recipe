import React from "react";
import Headings from "../Headings";
import BannerSlider from "./BannerSlider";
import LatestRecipe from "./LatestRecipe";
import Footnote from "../Footnote";

import TopRating from "./TopRating";
import useQueryData from "../../../custom-hook/useQueryData";

const Homepage = () => {
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

  return (
    <>
      <Headings />
      <BannerSlider result={result} />
      <LatestRecipe result={result} />
      <TopRating />
      <Footnote />
    </>
  );
};

export default Homepage;
