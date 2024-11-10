import React from "react";
import "./Overview.scss";
import { phones } from "../../assets/images/index";

export const Overview: React.FC = () => {
  return (
    <>
      <div className="overview-component">
        <img
          src={phones.phones_with_apps}
          alt="three phones with the logos of the CheapIT Family company"
        />
      </div>
    </>
  );
};
