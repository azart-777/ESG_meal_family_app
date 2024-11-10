import React from "react";
import { Trans } from "react-i18next";

interface ShortDescriptionProps {
  text: string;
}

export const ShortTextDescription: React.FC<ShortDescriptionProps> = ({ text }) => {
  return (
    <div>
      <Trans i18nKey={text} />
    </div>
  );
};
