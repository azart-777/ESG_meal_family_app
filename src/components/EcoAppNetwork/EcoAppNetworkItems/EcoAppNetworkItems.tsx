import React from "react";
import "./EcoAppNetworkItems.scss";
import { phones } from "../../../assets/images";
import { useTranslation } from "react-i18next";
import { EcoAppNetworkTree } from "./EcoAppNetworkTree/EcoAppNetworkTree";

export const EcoAppNetworkItems: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <div className="eco-app-network__list">
      <div className="eco-app-network__list-item">
        <img
          src={phones.phone_meal_count}
          alt={t("EcoAppNetworkItems.altPhoneMealCountImg")}
        />
        <EcoAppNetworkTree
          variant="meal"
          lineId={[
            "line2",
            "line5",
            "line7",
            "line10",
            "line14",
            "line15",
            "line18",
          ]}
        />
      </div>

      <div className="eco-app-network__list-item">
        <img
          src={phones.phone_cheap_it}
          alt={t("EcoAppNetworkItems.altPhoneCheapItImg")}
        />
        <EcoAppNetworkTree
          variant="cheap"
          lineId={[
            "line3",
            "line7",
            "line11",
            "line13",
            "line14",
            "line18",
            "line19",
          ]}
        />
      </div>

      <div className="eco-app-network__list-item">
        <img
          src={phones.phone_eco_meal}
          alt={t("EcoAppNetworkItems.altPhoneEcoMealImg")}
        />
        <EcoAppNetworkTree
          variant="eco"
          lineId={[
            "line1",
            "line7",
            "line9",
            "line11",
            "line12",
            "line13",
            "line14",
            "line16",
            "line17",
            "line18",
            "line20",
          ]}
        />
      </div>
    </div>
  );
};
