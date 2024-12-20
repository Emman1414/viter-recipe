export const getRecipeByCategory = (categoryId, resultRecipe) => {
  let result = [];

  // push
  resultRecipe?.data.map((item) => {
    if (Number(categoryId) === Number(item.category_aid)) {
      result.push(item);
    }
  });

  return result;
};

export const getCategoryItems = (resultCategory, resultRecipe, resultLevel) => {
  let theKey = "Chicken";
  let resultCategoryId = ["Easy", "Moderate",  "Difficult"];

  resultCategory?.data.map((categoryItem) => {
    let isResultCategoryExist = false;

    //checks
    resultRecipe?.data.map((foodItem) => {
      isResultCategoryExist = resultCategoryId.includes(
        Number(categoryItem.category_aid)
      );

      // pang read ng index
      const getIndexCategoryItem = resultCategoryId.indexOf(
        foodItem.recipe_category_id
      );

      if (
        Number(categoryItem.category_aid) ===
          Number(foodItem.recipe_category_aid) &&
        isResultCategoryExist === false
      ) {
        resultCategoryId.push(categoryItem.recipe_aid);
        result.push({
          ...categoryItem,
          Easy: Number(foodItem.recipe_title),
        });
      }
    });
  });
};
