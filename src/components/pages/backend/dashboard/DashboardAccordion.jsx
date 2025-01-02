import { ChevronDown, Dot } from "lucide-react";
import React from "react";
import IconNoData from "../partials/IconNoData";

const DashboardAccordion = ({ item, clothesItems }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div className="accordion mb-3">
      <div
        className="accordion-header p-2 px-5 flex justify-between bg-secondary  rounded-t-md cursor-pointer"
        onClick={handleToggleOpen}
      >
        <h5 className="mb-0 ">{item.category_title}</h5>
        <button>
          <ChevronDown
            className={`transition-all ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <div
        className={`accordion-body border border-line rounded-b-md border-t-0 overflow-hidden  h-full transition-all ${
          isOpen ? "max-h-[600px]" : "max-h-[0px]"
        }`}
      >
        <ul className="space-y-3 py-4 px-2">
          {clothesItems?.length == 0 && <IconNoData />}
          {clothesItems?.length > 0 &&
            clothesItems.map((item, key) => (
              <li className="flex" key={key}>
                <Dot
                  size={30}
                  className={`${
                    item.clothes_is_active == 1 ? "text-success" : "text-gray"
                  }`}
                />
                {item.clothes_title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardAccordion;
