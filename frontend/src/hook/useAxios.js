import axios from "axios";
import { useState } from "react";
import { useContract } from "./useContract";

export const useAxios = (address, cursor) => {
  const { nfts, dispatch } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      let res;
      if (cursor) {
        res = await axios.get("http://localhost:4000/collections", {
          params: { address, cursor },
        });
      } else {
        res = await axios.get("http://localhost:4000/collections", {
          params: { address },
        });
      }

      let n = nfts;
      const data = {
        cursor: res.data.result.cursor,
        nfts: n.concat(res.data.result.result),
        address,
      };

      dispatch({ type: "GET_NFTS", payload: data });
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return { fetchData, isLoading };
};
