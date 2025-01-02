import React from "react";
import { getClothesByCategory } from "./function";

const DashboardCard = ({ item, dataClothes }) => {
  const clothesItem = getClothesByCategory(item.category_aid, dataClothes);

  const activeClothes = clothesItem
    ?.filter((item) => item.clothes_is_active == 1)
    .reduce((prev, cur) => prev + 1, 0);

  const inactiveClothes = clothesItem
    ?.filter((item) => item.clothes_is_active == 0)
    .reduce((prev, cur) => prev + 1, 0);

  return (
    <div className="card bg-secondary p-4 rounded-md border border-line">
      <small>{item.category_title}</small>
      <h2 className="text-3xl mb-2 mt-1">{clothesItem?.length}</h2>
      <ul className="flex gap-5 items-center">
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-success block"></span>
          {activeClothes} active
        </li>
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-gray-400 block"></span>
          {inactiveClothes}
          inactive
        </li>
      </ul>
    </div>
  );
};

export default DashboardCard;
