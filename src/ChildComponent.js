import React from "react";
import { useStore } from "./store/StoreCtx";

const ChildComponent = () => {
  const { logoColor } = useStore();
  return <p style={{ backgroundColor: logoColor }}>This is a para</p>;
};

export default ChildComponent;
