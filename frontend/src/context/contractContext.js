import { createContext, useReducer } from "react";

export const ContractContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_NFTS":
      return {
        ...state,
        nfts: action.payload.nfts,
        address: action.payload.address,
        cursor: action.payload.cursor,
      };
    case "CHANGE_ADDRESS":
      return {
        ...state,
        nfts: [],
        address: null,
        cursor: null,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        modal: state.nfts.find((nft) => nft.token_id === action.payload),
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        modal: [],
      };
    default:
      return state;
  }
};

export const ContractContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isModalOpen: false,
    nfts: [],
    modal: [],
    cursor: null,
    address: null,
  });
  return (
    <ContractContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContractContext.Provider>
  );
};
