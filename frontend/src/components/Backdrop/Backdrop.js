import React from "react";
import { useContract } from "../../hook/useContract";
import "./Backdrop.css";

const Backdrop = () => {
  const { isModalOpen, dispatch } = useContract();
  return (
    isModalOpen && (
      <div
        className="backdrop"
        onClick={() => dispatch({ type: "CLOSE_MODAL" })}
      ></div>
    )
  );
};

export default Backdrop;
