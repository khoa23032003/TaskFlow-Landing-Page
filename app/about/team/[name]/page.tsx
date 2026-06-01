import React from "react";

const DynamicRouting = ({ params }: { params: { name: string } }) => {
  return <div>TeamPageInsideAboutPage {params.name}</div>;
};

export default DynamicRouting;
