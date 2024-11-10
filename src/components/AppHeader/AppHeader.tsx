import React from "react";
import "./AppHeader.scss";
import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";
import { MainCompanyLogo } from "../../shared/components/mainCompanyLogo/MainCompanyLogo";

export const AppHeader: React.FC = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo-container">
          <div className="header__logo">
            <MainCompanyLogo />
          </div>
        </div>
        <div className="header__language-switch-container">
          <LanguageSwitch />
        </div>
      </div>
    </>
  );
};
