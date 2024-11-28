import React from "react";
import { imgPath } from "../../../helpers/functions-general";
import { Link } from "react-router-dom";

const CardItem = ({ item, key }) => {
  const title = item.title;
  return (
    <Link to={ `/product/${title.toLowerCase().replaceAll(" ", "-")}`}>
      <div
        className="new-arrival-card px-4"
        key={key}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="mb-4 relative group">
          <p className="absolute top-5 left-5 bg-white px-2 py-2 rounded-full text-[10px] font-bold  group-hover:opacity-0 transition-opacity">
            NEW
          </p>
          <img
            src={`${imgPath}/${item.img1}`}
            alt=""
            className="transition-opacity group-hover:opacity-1"
          />
          <img
            src={`${imgPath}/${item.img2}`}
            alt=""
            className="transition-opacity absolute left-0 top-0 group-hover:opacity-0 "
          />
        </div>

        <div className="text-center space-y-4">
          <h5>{item.price}</h5>
          <h6>${item.price} PHP</h6>
          <ul className="price flex gap-5 justify-center">
            <li className="tooltip" data-tooltip="in stock">
              29
            </li>
            <li className="tooltip" data-tooltip="in stock">
              30
            </li>
            <li className="tooltip" data-tooltip="in stock">
              32
            </li>
            <li className="tooltip" data-tooltip="in stock">
              34
            </li>
            <li className="tooltip" data-tooltip="in stock">
              36
            </li>
            <li className="tooltip" data-tooltip="out of stock">
              38
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
