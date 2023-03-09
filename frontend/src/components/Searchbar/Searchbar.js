import React, { useState } from "react";
import { useAxios } from "../../hook/useAxios";
import { useContract } from "../../hook/useContract";
import "./Searchbar.css";

const Searchbar = () => {
  const [contract, setContract] = useState("");
  const { dispatch } = useContract();
  const { fetchData, isLoading } = useAxios(contract);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contract) {
      fetchData();
      setContract("");
    }
  };

  const changeContract = (e) => {
    setContract(e.target.value);
    dispatch({ type: "CHANGE_ADDRESS" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Get Ethereum NFTs by Wallet</h1>

      <div className="input">
        <input
          placeholder="Enter NFT"
          type="text"
          id="contract"
          name="contract"
          required={true}
          value={contract}
          onChange={(e) => changeContract(e)}
        />
      </div>

      <button type="submit" className="btn" disabled={isLoading}>
        {isLoading ? "Loading" : "Enter"}
      </button>
    </form>
  );
};

export default Searchbar;
