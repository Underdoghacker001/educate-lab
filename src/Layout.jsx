import React from "react";
import Nav from "./components/Nav";

const Layout = props => {
  return (
    <>
      <Nav />
      <div className="px-24">{props.children}</div>
    </>
  );
};

export default Layout;
