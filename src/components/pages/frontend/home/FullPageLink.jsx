import React from "react";
import { imgPath } from "@/components/helpers/functions-general";
import { Link } from "react-router-dom";

const FullPageLink = ({ img, header, subheader }) => {
  return (
    <section className="page-full-link relative">
      <Link to="/">
        <img
          src={`${imgPath}/${img}`}
          alt=""
          className="w-full min-h-[900px] md:min-h-[600px] object-cover"
        />
        <div className="absolute bottom-10 left-10 text-white">
          <small>{subheader}</small>
          <h2 className="">{header}</h2>
        </div>
      </Link>
    </section>
  );
};

export default FullPageLink;
