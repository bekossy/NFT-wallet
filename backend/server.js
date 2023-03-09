require("dotenv").config();
const express = require("express");
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to my NFT server</h1>");
});

app.get("/collections", async (req, res) => {
  try {
    const { query } = req;

    let NFTs;

    if (query.cursor) {
      NFTs = await Moralis.EvmApi.nft.getContractNFTs({
        address: query.address,
        chain: EvmChain.ETHEREUM,
        cursor: query.cursor,
        limit: 10,
      });
    } else {
      NFTs = await Moralis.EvmApi.nft.getContractNFTs({
        address: query.address,
        chain: EvmChain.ETHEREUM,
        limit: 10,
      });
    }

    let result = NFTs.raw;

    return res.status(200).json({ result });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ mssg: "Something went wrong" });
  }
});

Moralis.start({
  apiKey: "sEgAzicJiCc899auMVzwnlVfJHm6KOKCmucvOO5mf3EDPmqIj9d6KP4DAzTx6ObM",
}).then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
  });
});
