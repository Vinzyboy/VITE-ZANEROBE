export const getClothesByCategory = (categoryId, dataClothes) => {
  let result = [];
  let resultCategoryId = [];

  dataClothes?.data.map((item) => {
    if (Number(categoryId) === Number(item.category_aid)) {
      result.push(item);
    }
  });
  return result;
};

export const getCategoryPrices = (dataCategory, dataClothes) => {
  let result = [];
  let resultCategoryId = [];

  dataCategory?.data.map((categoryItem) => {
    let isResultCategoryExist = false;

    dataClothes?.data.map((clothesItem) => {
      // BOOLEAN CHECK IF CATEGORY EXIST IN RESULT CATEGORY ARRAY
      isResultCategoryExist = resultCategoryId.includes(
        Number(categoryItem.category_aid)
      );

      // GET INDEX OF EXISTING CATEGORY
      const getIndexCategoryItem = resultCategoryId.indexOf(
        clothesItem.clothes_category_id
      );

      // IF CATEGORY NOT EXIST ADD CATEGORY WITH PRICE
      if (
        Number(categoryItem.category_aid) ===
          Number(clothesItem.clothes_category_id) &&
        isResultCategoryExist === false
      ) {
        resultCategoryId.push(categoryItem.category_aid);
        result.push({
          ...categoryItem,
          menu_price: Number(clothesItem.clothes_price),
        });
      }

      // IF CATEGORY EXIST ADD MENU PRICE TO CATEGORY
      if (
        Number(categoryItem.category_aid) ===
          Number(clothesItem.clothes_category_id) &&
        isResultCategoryExist === true &&
        getIndexCategoryItem >= 0
      ) {
        result[getIndexCategoryItem].menu_price += Number(
          clothesItem.clothes_price
        );
      }
    });

    if (!isResultCategoryExist) {
      result.push({ ...categoryItem, menu_price: 0 });
      resultCategoryId.push(categoryItem.category_aid);
    }
  });

  return result;
};
