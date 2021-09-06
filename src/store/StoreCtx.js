import React from "react";

// Step 1: Create a React Context and save it in a variable
const StoreCtx = React.createContext();
StoreCtx.displayName = "StoreCtx"; // Optional: for better error handling

// Step 2: Create a hook for convenient use of `React.useContext(CtxName)`. Saves much time
export const useStore = () => {
  return React.useContext(StoreCtx);
};

// Step 3: Like Step#2, it saves time and adds convenience while utilizing the store data in the components. With this wrapping becomes just like any hoc.
export const StoreProvider = ({ children }) => {
  const logoColor = `#ff0000`;

  return (
    <StoreCtx.Provider value={{ logoColor }}>{children}</StoreCtx.Provider>
  );
};
