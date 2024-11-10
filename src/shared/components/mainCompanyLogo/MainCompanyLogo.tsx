import React from "react";
import { logos } from "../../../assets/images";

export const MainCompanyLogo: React.FC = () => {
  return (
    <>
      <img
        className="logo__image"
        src={logos.header_logo_chip_it_without_text}
        alt="Chip It Family Logo. Green Basket with the text Chip It Family under it."
      />
      <h3 className="logo__text">
        Cheap <span>IT Fa</span>mily
      </h3>
    </>
  );
};
