import { createContext, useState } from "react";

export const BackgroundContext = createContext(null);

const BackgroundContextProvider = (props) => {
  const [bgRed, setBgRed] = useState(false);

  const toggleBackground = () => {
    setBgRed(!bgRed);
  };

  const contextValue = {
    bgRed,
    toggleBackground,
  };
  return (
    <BackgroundContext.Provider value={contextValue}>
      {props.children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundContextProvider;
