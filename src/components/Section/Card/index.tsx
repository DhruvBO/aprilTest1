import React, { useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";

type typeProps = {
  downloadUrl: string;
  author: string;
  id: number;
};
const ImageCard = ({ downloadUrl, author, id }: typeProps) => {

  return (
    <div className="card_main">
      <div className="card_main__card_main__card_wrapper">
        <div className="card_main__card_wrapper__card_heading">
          <h3>{author}</h3>
        </div>
        <div className="card_main__card_wrapper__card_image">
          <Link to={`/detail-view/${id}`}>
            <img src={downloadUrl} alt="download_image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
