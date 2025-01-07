import React from "react";
import { ChevronDown, Dot } from "lucide-react";
// import { getFoodByCategory } from "./function";
import IconNoData from "../partials/IconNoData";

const DashboardAccordion = ({ title, resultRecipe, item, foodItems }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const getCardDetails = menus.filter(
  //   (item) => item.menu_category === filterby
  // );
  const foodItem = getFoodByCategory(item.category_aid, resultRecipe);
  // const activeFood = foodItem
  //   ?.filter((item) => item.food_is_active == 1)
  //   .reduce((prev, cur) => prev + 1, 0);
  // const inactiveFood = foodItem
  //   ?.filter((item) => item.food_is_active == 0)
  //   .reduce((prev, cur) => prev + 1, 0);

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="accordion mb-2">
        <div
          className="accordion-header p-2 py-4 flex justify-between bg-secondary rounded-top-md cursor-pointer w-full "
          onClick={handleToggleOpen}
        >
          <h6 className="mb-0">{title}</h6>
          <button>
            <ChevronDown
              className={`transition-all ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        <div
          className={`accordion-body border border-line rounded-b-md border-t-0 overflow-hidden h-full transition-all ${
            isOpen ? "max-h-[600px]" : "max-h-[0px]"
          }`}
        >
          <ul className="space-y-3 py-4 px-2">
            {foodItems?.length == 0 && <IconNoData />}
            {foodItems?.length > 0 &&
              foodItems.map((item, key) => (
                <li className="flex items-center" key={key}>
                  <Dot
                    size={30}
                    className={`${
                      item.level_level === "Easy" ? "text-success" : ""
                    } : ${
                      item.level_level === "Moderate" ? "text-info" : ""
                    } : ${item.level_level === "Difficult" ? "text-alert" : ""}`}
                  />
                  {item.recipe_title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardAccordion;
