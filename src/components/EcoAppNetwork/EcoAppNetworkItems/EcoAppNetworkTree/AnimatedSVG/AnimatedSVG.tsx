import React from "react";
import "./AnimatedSVG.scss";

interface PathObject {
  id: string;
  d: string;
  stroke: string;
  strokeWidth: number;
  fill: string;
}

interface CircleObject {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  stroke?: string;
  strokeWidth?: number;
}

interface RectObject {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}

interface AnimationSettings {
  animate: boolean;
  duration: string;
  repeatCount: string;
}

interface AnimatedSVGProps {
  paths: PathObject[];
  circles: CircleObject[];
  rects: RectObject[];
  lineId: string[];
  animationSettings: AnimationSettings;
}

export const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
  paths,
  circles,
  rects,
  lineId,
  animationSettings,
}) => {
  const getAnimationDuration = (id: string, defaultDuration: string) => {
    if (
      id === "line13" ||
      id === "line15" ||
      id === "line17" ||
      id === "line18" ||
      id === "line19"
    ) {
      return "5s";
    }
    return defaultDuration;
  };

  return (
    <svg viewBox="0 0 340 50">
      <defs>
        <filter id="glow" x="-500%" y="-500%" width="1000%" height="1000%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur1" />
          <feGaussianBlur in="blur1" stdDeviation="4" result="blur2" />
          <feGaussianBlur in="blur1" stdDeviation="2" result="blur3" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="blur3" />
          </feMerge>
        </filter>
      </defs>

      {paths.map((pathObj, index) => (
        <path
          key={index}
          id={pathObj.id}
          d={pathObj.d}
          stroke={pathObj.stroke}
          strokeWidth={pathObj.strokeWidth}
          fill={pathObj.fill}
        />
      ))}

      {circles.map((circleObj, index) => (
        <circle
          key={index}
          cx={circleObj.cx}
          cy={circleObj.cy}
          r={circleObj.r}
          fill={circleObj.fill}
          stroke={circleObj.stroke}
          strokeWidth={circleObj.strokeWidth}
        />
      ))}

      {rects.map((rectObj, index) => (
        <rect
          key={index}
          x={rectObj.x}
          y={rectObj.y}
          width={rectObj.width}
          height={rectObj.height}
          fill={rectObj.fill}
        />
      ))}

      {animationSettings.animate &&
        lineId.map((id, index) => (
          <circle
            key={index}
            className="dot"
            cx="0"
            cy="0"
            r="5"
            fill="rgb(0, 179, 15)"
            filter="url(#glow)"
          >
            <animateMotion
              repeatCount={animationSettings.repeatCount}
              dur={getAnimationDuration(id, `${3 + index * 2}s`)}
              keyPoints="0;1;0"
              keyTimes="0;0.5;1"
            >
              <mpath href={`#${id}`} />
            </animateMotion>
          </circle>
        ))}
    </svg>
  );
};
