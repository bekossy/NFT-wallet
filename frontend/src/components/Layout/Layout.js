import React from "react";
import { useAxios } from "../../hook/useAxios";
import { useContract } from "../../hook/useContract";
import Card from "../Card/Card";
import "./Layout.css";

const Layout = () => {
  const { nfts, cursor, address } = useContract();
  const { fetchData, isLoading } = useAxios(address, cursor);

  return (
    <div className="layout">
      <h1>NFTs {`(${nfts.length})`}</h1>

      {nfts.length > 0 ? (
        <>
          <div className="layout-grid">
            {nfts.map((nft) => {
              return <Card {...nft} key={nft.token_id} />;
            })}
          </div>
          <button
            className="layout-btn"
            onClick={() => fetchData()}
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Load more"}
          </button>
        </>
      ) : (
        <div className="layout-empty">
          <p>No NFT Contracts to display...</p>
        </div>
      )}
    </div>
  );
};

export default Layout;
