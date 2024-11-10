import React from "react";
import "./EcoAppNetworkTree.scss";
import { AnimatedSVG } from "./AnimatedSVG/AnimatedSVG";
import {
  paths,
  circles,
  rects,
  animationSettings,
} from "./AnimatedSVG/dataForSVG";
interface EcoAppNetworkTreeProps {
  variant: "meal" | "cheap" | "eco";
  lineId: string[];
}

export const EcoAppNetworkTree: React.FC<EcoAppNetworkTreeProps> = ({
  variant,
  lineId,
}) => {
  return (
    <div className={`eco-app-network-tree eco-app-network-tree--${variant}`}>
      <AnimatedSVG
        paths={paths}
        circles={circles}
        rects={rects}
        lineId={lineId}
        animationSettings={animationSettings}
      />
    </div>
  );
};
