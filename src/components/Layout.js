import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
