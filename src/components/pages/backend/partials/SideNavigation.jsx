import { imgPath } from "@/components/helpers/functions-general";
import {
  Clapperboard,
  LayoutDashboard,
  Megaphone,
  Shirt,
  UtensilsCrossed,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Category",
      slug: "/admin/category",
      icon: <UtensilsCrossed size={17} />,
    },
    {
      title: "Clothes",
      slug: "/admin/clothes",
      icon: <Shirt size={17} />,
    },

  ];
  return (
    <>
      <aside className="p-4 border-r border-line">
        <img
          src={`${imgPath}/zanerobe-new-logo.png`}
          alt=""
          className="w-[80%] mx-auto mt-2 "
        />
        <nav>
          <ul className="mt-10">
            {links.map((item, key) => (
              <li
                className={`${
                  menu === item.slug.replaceAll("/admin/", "")
                    ? "border-accent bg-accent bg-opacity-100 text-white"
                    : ""
                } p-2 mb-2 rounded-md border border-transparent opacity-60 hover:opacity-100`}
                key={key}
              >
                <NavLink
                  to={`${item.slug}`}
                  className="flex gap-2 items-center text-base"
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideNavigation;
