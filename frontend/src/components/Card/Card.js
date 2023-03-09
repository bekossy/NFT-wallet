import React from "react";
import { useContract } from "../../hook/useContract";
import { useImgUrl } from "../../hook/useImgUrl";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./Card.css";

const Card = (props) => {
  const { metadata, name, token_id, last_token_uri_sync, symbol } = props;
  const { dispatch } = useContract();
  const { imgUrl } = useImgUrl(metadata);

  return (
    <div className="card">
      <img src={imgUrl()} alt={name} />

      <div className="card-info">
        <h2>
          {name} #{token_id}
        </h2>
        <p>
          Symbol <span>{symbol}</span>
        </p>
        <p>
          Last Token sync{" "}
          <span>
            {formatDistanceToNow(new Date(last_token_uri_sync), {
              addSuffix: true,
            })}
          </span>
        </p>
      </div>

      <button
        type="button"
        className="card-btn"
        onClick={() => dispatch({ type: "OPEN_MODAL", payload: token_id })}
      >
        view
      </button>
    </div>
  );
};

export default Card;
