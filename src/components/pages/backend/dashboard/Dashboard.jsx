import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardCard from "./DashboardCard";
import DashboardAccordion from "./DashboardAccordion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import useQueryData from "@/components/custom-hook/useQueryData";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";

import IconNoData from "../partials/IconNoData";
import TableLoader from "../partials/TableLoader";
import { getCategoryPrices } from "./function";

const Dashboard = () => {
  const {
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
    error: errorCategory,
    data: dataCategory,
    status,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category" // key
  );

  const {
    isLoading: isLoadingClothes,
    isFetching: isFetcingClothes,
    error: errorClothes,
    data: dataClothes,
  } = useQueryData(
    `/v2/clothes`, // endpoint
    "get", // method
    "clothes" // key
  );

  const tableData = getCategoryPrices(dataCategory, dataClothes);
  console.log(tableData);

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Jollibee" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div>
                <div className="grid grid-cols-[1fr_400px] gap-5">
                  <div className="stats ">
                    <div className="chart relative pb-24 min-h-[30rem]">
                      <h2>Menu Prices</h2>
                      {(isFetchingCategory || isFetcingClothes) &&
                        !isLoadingCategory &&
                        !isLoadingClothes && <FetchingSpinner />}
                      {isLoadingCategory || isLoadingClothes ? (
                        <TableLoader cols={1} count={15} />
                      ) : (
                        <BarChart
                          width={1000}
                          height={400}
                          data={tableData.slice(0, 10)}
                          margin={{
                            top: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category_title" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar
                            dataKey="menu_price"
                            fill="#8884d8"
                            activeBar={
                              <Rectangle fill="yellow" stroke="blue" />
                            }
                          />
                        </BarChart>
                      )}
                    </div>
                    <div className="relative">
                      {isFetchingCategory && !isLoadingCategory && (
                        <FetchingSpinner />
                      )}
                      {isLoadingCategory && <TableLoader cols={4} count={20} />}
                      {dataCategory?.count === 0 && <IconNoData />}
                      <div className="grid grid-cols-4 gap-5  overflow-auto custom-scroll ">
                        {dataCategory?.data.map((item, key) => {
                          return (
                            <DashboardCard
                              item={item}
                              key={key}
                              dataClothes={dataClothes}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="sidebar relative overflow-auto custom-scroll h-[calc(100vh-250px)]">
                    {isFetchingCategory && isLoadingCategory && (
                      <FetchingSpinner />
                    )}
                    {isLoadingCategory && <TableLoader cols={1} count={15} />}
                    {dataCategory?.count === 0 && <IconNoData />}
                    {dataCategory?.count > 0 &&
                      dataCategory?.data.map((item, key) => {
                        const clothesItems = dataClothes?.data.filter(
                          (clothesItem) =>
                            clothesItem.clothes_category_id == item.category_aid
                        );
                        return (
                          <DashboardAccordion
                            item={item}
                            key={key}
                            clothesItems={clothesItems}
                          />
                        );
                      })}
                  </div>
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
