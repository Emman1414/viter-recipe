export const getFoodByCategory = (categoryId, resultRecipe) => {
  let result = [];

  resultRecipe?.data.map((item) => {
    if (Number(categoryId) === Number(item.category_aid)) {
      result.push(item);
    }
  });

  return result;
};

export const getCategoryPrices = (resultCategory, resultRecipe) => {
  let result = [];
  let resultCategoryId = [];

  resultCategory?.data.map((categoryItem) => {
    let isResultCategoryExist = false;

    resultRecipe?.data.map((foodItem) => {
      // BOOLEAN CHECK IF CATEGORY EXIST IN RESULT CATEGORY ARRAY
      isResultCategoryExist = resultCategoryId.includes(
        Number(categoryItem.category_aid)
      );

      // GET INDEX OF EXISTING CATEGORY
      const getIndexCategoryItem = resultCategoryId.indexOf(
        foodItem.recipe_category_id
      );

      //IF CATEGORY NOT EXIST ADD CATEGORY WITH PRICE
      if (
        Number(categoryItem.category_aid) ===
          Number(foodItem.recipe_category_id) &&
        isResultCategoryExist === false
      ) {
        resultCategoryId.push(categoryItem.category_aid);
        result.push({
          ...categoryItem,
          menu_price: Number(foodItem.recipe_price),
        });
      }

      // IF CATEGORY EXIST ADD MENU PRICE TO CATEGORY
      if (
        Number(categoryItem.category_aid) ===
          Number(foodItem.recipe_category_id) &&
        isResultCategoryExist === true &&
        getIndexCategoryItem >= 0
      ) {
        result[getIndexCategoryItem].menu_price += Number(foodItem.recipe_price);
      }
    });

    if (!isResultCategoryExist) {
      result.push({ ...categoryItem, menu_price: 0 });
      resultCategoryId.push(categoryItem.category_aid);
    }
  });
  return result;
};
