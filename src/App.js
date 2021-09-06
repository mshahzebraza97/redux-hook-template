import React from "react";
import { useStore } from "./store/StoreCtx";
import ChildComponent from "./ChildComponent";

function App() {
  const { logoColor } = useStore();
  return (
    <>
      <ChildComponent />
      <h1 style={{ color: logoColor }}>Test App</h1>;
    </>
  );
}

export default App;
