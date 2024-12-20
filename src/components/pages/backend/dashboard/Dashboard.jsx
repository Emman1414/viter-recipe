import useQueryData from "@/components/custom-hook/useQueryData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import IconNoData from "../partials/IconNoData";
import SideNavigation from "../partials/SideNavigation";
import FetchingSpinner from "../partials/spinners/FetchingSpinner";
import TableLoader from "../partials/TableLoader";
import DashboardAccordion from "./DashboardAccordion";
import DashboardCard from "./DashboardCard";
import { getCategoryItems } from "./function";

const Dashboard = () => {
  const {
    isFetching: isFetchingCategory,
    isLoading: isLoadingCategory,
    error: errorCategory,
    data: resultCategory,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category" // key
  );

  const {
    isFetching: isFetchingRecipe,
    isLoading: isLoadingRecipe,
    error: errorRecipe,
    data: resultRecipe,
  } = useQueryData(
    `/v2/recipe`, // endpoint
    "get", // method
    "recipe" // key
  );

  const {
    isFetching: isFetchingLevel,
    isLoading: isLoadingLevel,
    error: errorLevel,
    data: resultLevel,
  } = useQueryData(
    `/v2/level`, // endpoint
    "get", // method
    "level" // key
  );

  const tableData = getCategoryItems(resultCategory, resultRecipe);

  console.log(tableData);

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Home Recipes!" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="relative chart pb-16 min-h-[30rem]">
                    {(isFetchingCategory || isFetchingRecipe) &&
                      !isLoadingCategory &&
                      !isLoadingRecipe && <FetchingSpinner />}
                    {isLoadingCategory || isLoadingRecipe ? (
                      <TableLoader col={1} count={15} />
                    ) : (
                      <>
                        <ResponsiveContainer width={1000} height={400}>
                          <h3>Inventory</h3>
                          <BarChart
                            width={1200}
                            height={250}
                            data={tableData}
                            // data={category_title.slice(0, 10)}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="name" /> */}
                            <XAxis dataKey="category_title" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {/* STATIC LAMANG */}
                            <Bar dataKey="Easy" stackId="a" fill="#82ca9d" />
                            <Bar
                              dataKey="Moderate"
                              stackId="a"
                              fill="#3a1bf8"
                            />
                            <Bar
                              dataKey="Difficult"
                              stackId="a"
                              fill="#f70505"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </>
                    )}
                  </div>
                  <div className="relative">
                    {isFetchingCategory && !isLoadingCategory && (
                      <FetchingSpinner />
                    )}

                    <div className="grid grid-cols-4 gap-5">
                      {isLoadingCategory && <TableLoader cols={4} count={20} />}
                      {resultCategory?.count === 0 && <IconNoData />}
                      {resultCategory?.count > 0 &&
                        resultCategory?.data.map((item, key) => {
                          return (
                            <DashboardCard
                              key={key}
                              item={item}
                              resultRecipe={resultRecipe}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className=" relative sidebar custom-scroll h-[calc(100vh-150px)] overflow-auto">
                  {isLoadingCategory && <TableLoader cols={4} count={20} />}
                  {resultCategory?.count === 0 && <IconNoData />}
                  {resultCategory?.count > 0 &&
                    resultCategory?.data.map((item, key) => {
                      const foodItems = resultRecipe?.data.filter(
                        (foodItems) =>
                          foodItems.recipe_category_id == item.category_aid
                      );
                      return (
                        <DashboardAccordion
                          key={key}
                          item={item}
                          title={item.category_title}
                          foodItems={foodItems}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
