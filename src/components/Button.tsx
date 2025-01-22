import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onclick?: () => void;
};

const Button = ({ children, onclick }: PropsType) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "1.2em",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "blueviolet",
        color: "white",
        border: "none",
      }}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export { Button };
