import { useContext } from "react";
import { ContractContext } from "../context/contractContext";

export const useContract = () => {
  const context = useContext(ContractContext);

  if (!context) {
    return Error("useContract must be used inside a ContractContextProvider");
  }

  return context;
};
