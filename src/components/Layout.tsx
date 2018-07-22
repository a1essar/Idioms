import * as React from "react";

export const Layout: React.SFC = ({ children }) => (
  <div className="Layout" style={styledLayout}>
    <div className="Header" />
    {children}
    <div className="Footer" />
  </div>
);

const styledLayout = {
  minHeight: "100vh",
  backgroundColor: "#fffff4",
  display: "flex",
  flexDirection: "column"
} as React.CSSProperties;
