import { useState } from "react";
import { createContext } from "react";
export const Data = createContext();

const Context = ({ children }) => {
  const [deal, setDeal] = useState(false);
  const handleClick = () => {
    setDeal(!deal);
  };
  return (
    <Data.Provider value={{ handleClick, deal, setDeal }}>
      {children}
    </Data.Provider>
  );
};

export default Context;
