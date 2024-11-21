import React, { Children } from "react";

const Mapping = ({ of, render }) => {
  return <>{Children.toArray(of.map((item, index) => render(item, index)))}</>;
};

export default Mapping;
