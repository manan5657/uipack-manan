import * as React from "react";
import { useState } from "react";
import "../styles/Button.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "uplift" | "slide" | "pop" | "shine" | "rainbow"; // Allow all variants
  style?: React.CSSProperties; // Use React.CSSProperties for styles
  tooltip?: boolean; // tooltip is a boolean
  tooltipText?: string; // tooltipText should be a string
  onClick: () => void | Promise<void>; // Allow async functions for onClick
  magic?: boolean; // Allow optional magic prop
};

const Button = ({
  children,
  variant = "default",
  style = {},
  tooltip = false,
  tooltipText = "Tooltip",
  onClick,
  magic = false, // New prop
}: ButtonProps) => {
  // Button variants
  const variants = {
    default: "btn-default",
    uplift: "btn-uplift",
    slide: "btn-slide",
    pop: "btn-pop",
    shine: "btn-shine",
    rainbow: "btn-rainbow",
  };

  const variantClass = variants[variant] || variants.default;

  // Tooltip visibility state
  const [showTooltip, setShowTooltip] = useState(false);

  if (magic) {
    // Magic button template
    return (
      <button className="magic">
        {children}
        {[...Array(6)].map((_, index) => (
          <div key={index} className={`star-${index + 1}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality" as any,
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
            >
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
        ))}
      </button>
    );
  }

  // Regular button template
  return (
    <div
      className="btn-container"
      onMouseEnter={() => tooltip && setShowTooltip(true)}
      onMouseLeave={() => tooltip && setShowTooltip(false)}
    >
      {tooltip && showTooltip && <div className="tooltip">{tooltipText}</div>}
      <button className={`btn ${variantClass}`} style={style} onClick={onClick}>
        <span>{children}</span>
      </button>
    </div>
  );
};

export { Button };
