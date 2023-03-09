export const useImgUrl = (metadata) => {
  const imgUrl = () => {
    if (!metadata)
      return "https://media.istockphoto.com/id/1367699775/photo/nft-non-fungible-token-golden-coins-falling-trendy-cryptocurrencies-and-coins-on-the.jpg?b=1&s=170667a&w=0&k=20&c=9oFb0ZEq_r2QfLVW-4JrYK7KI_8eUdhOCayCDXrSMg4=";

    let meta = JSON.parse(metadata);

    if (!meta.image)
      return "https://media.istockphoto.com/id/1367699775/photo/nft-non-fungible-token-golden-coins-falling-trendy-cryptocurrencies-and-coins-on-the.jpg?b=1&s=170667a&w=0&k=20&c=9oFb0ZEq_r2QfLVW-4JrYK7KI_8eUdhOCayCDXrSMg4=";

    if (!meta.image.includes("ipfs://")) {
      return meta.image;
    } else {
      return "https://ipfs.io/ipfs/" + meta.image.substring(7);
    }
  };

  return { imgUrl };
};
