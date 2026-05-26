import React from "react";

const DynamicRouting = async ({params}) => {
  const name = (await.params).name;
  return <div>TeamPageInsideAboutPage {name}</div>;
};

export default DynamicRouting;
