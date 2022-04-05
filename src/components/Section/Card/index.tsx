import React, { useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";

type typeProps = {
  downloadUrl: string;
  author: string;
  id: number;
  hasStoppedScrolling: boolean;
  lastTwoEle: {
    secondLastEle: string;
    lastEle: string;
  };
};

const ImageCard = ({
  downloadUrl,
  author,
  id,
  hasStoppedScrolling,
  lastTwoEle,
}: typeProps) => {
  // console.log(
  //   id,
  //   lastTwoEle.secondLastEle,
  //   lastTwoEle.lastEle,
  //   hasStoppedScrolling
  // );
  // console.log("outside the condition: ", lastTwoEle, id);
  const onStopScolling = () => {
    if (
      hasStoppedScrolling &&
      (id.toString() === lastTwoEle.secondLastEle ||
        id.toString() === lastTwoEle.lastEle)
    ) {
      console.log("inside the condition: ", lastTwoEle, id);
      return true;
    }
    return false;
  };
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
        {onStopScolling() && (
          <div>
            <p>I am the chosen one {id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
