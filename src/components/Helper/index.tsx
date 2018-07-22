import * as React from "react";

type Props = {
  title: string;
};

export const Helper: React.SFC<Props> = ({ title }) => {
  return (
    <div className="Helpers" style={styledHelper}>
      {title}
    </div>
  );
};

const styledHelper = {
  position: "absolute",
  top: 0,
  fontSize: "0.7rem"
} as React.CSSProperties;
