import React from "react";
import { useContract } from "../../hook/useContract";
import { useImgUrl } from "../../hook/useImgUrl";
import Icon from "@mdi/react";
import { mdiCloseThick } from "@mdi/js";
import ReactMarkdown from "react-markdown";
import "./Modal.css";

const Modal = () => {
  const { isModalOpen, modal, dispatch } = useContract();
  const { name, metadata, token_address, token_id } = modal;
  const { imgUrl } = useImgUrl(metadata);
  let meta;
  if (metadata) {
    meta = JSON.parse(metadata);
  }

  return (
    isModalOpen && (
      <>
        <div className="modal">
          <img src={imgUrl()} alt={name} />
          <div className="modalTitle">
            <h1>{name}</h1>
            <h3>
              Account <span>{token_address}</span>
            </h3>
          </div>
          <h2>Description</h2>
          <ReactMarkdown className="preview">{meta.description}</ReactMarkdown>

          <a
            href={`https://opensea.io/assets/ethereum/${token_address}/${token_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="purchase-btn"
          >
            purchase
          </a>

          <Icon
            path={mdiCloseThick}
            size={1}
            color="red"
            className="modal-btn"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          />
        </div>
      </>
    )
  );
};

export default Modal;
